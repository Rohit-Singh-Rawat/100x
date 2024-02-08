const jwt = require('jsonwebtoken');
const config = require('../config');
const JWT_SECRET = config.JWT_SECRET
const { User } = require("../db/index");
// Middleware for handling auth

async function userMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    try {
        const decodeToken = jwt.verify(token, JWT_SECRET)
        const username = decodeToken.username
        if (username) {
            const user = await User.findOne({
                username,
            })
            if (user) {
                req.headers.username = username;
                next();
            }
            else {
                res.status(403).json({
                    msg: "You are not authenticated"
                })
            }
        }
        else {
            res.status(403).json({
                msg: "No Username Found in Token"
            })
        }
    }
    catch (err) {
        res.json({
            message: "Invalid Token"
        })
    }

}

module.exports = userMiddleware;