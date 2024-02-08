const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const zod = require("zod")
const jwt = require('jsonwebtoken');
const config = require('../config');
const JWT_SECRET = config.JWT_SECRET;
const { User, Course } = require("../db/index");
// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    })
    if (user) {
        return res.send({ message: "User with this username already exists" });
    }

    try {
        await User.create({
            username, password
        })
    }
    catch (err) {
        return res.status(400).send({ message: "Invalid or missing data." });
    }

    res.json({ message: 'User created successfully' })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.send({
            token
        })
    }
    else {
        res.status(400).send({
            message: "Invalid Username or Password!"
        })
    }
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({});

    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const course = await Course.findOne({
        _id: courseId
    });
    if (!course) {
        return res.status(404).send({
            message: 'Invalid Course ID'
        })
    }

    await User.updateOne({
        username
    }, {
        $push: {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const user = await User.findOne({
        username
    })
    const purchasedCourses = user.purchasedCourses;
    const courses = await Course.find({});
    const myCourses = await Course.find({
        "_id": {
            $in: [...purchasedCourses]
        }
    })
    
    res.json({ myCourses })


});

module.exports = router