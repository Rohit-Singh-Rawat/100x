const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.findOne({
        username,
        password
    })
    if(admin){
        next();
    }
    else{
        res.status(404).send("User not found")
    }



}

module.exports = adminMiddleware;