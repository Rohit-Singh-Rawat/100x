const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const zod = require("zod")

const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.findOne({
        username
    })
    if (admin) {
        return res.json({message: "Admin with this username already exists"});
    }
    try{
        await Admin.create({
        username, password
    })
    }
    catch(err){
        return res.status(400).send({message: "Invalid or missing data."});
    }


    res.json({ message: 'Admin created successfully' })


});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, imageLink, price } = req.body;

    const obj = {
        title,
        description,
        imageLink,
        price
    };
    const schema = zod.object({
        title: zod.string(),
        description: zod.string(),
        imageLink: zod.string().url(),
        price: zod.number().positive()
    });
    if(!schema.safeParse(obj).success) {
        return res.status(404).send({
            message: "Invalid Inputs for Course"
        })
    }
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        message: 'Course created successfully',
        courseId: newCourse['_id']
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({});

    res.json({
        courses
    })
});

module.exports = router;