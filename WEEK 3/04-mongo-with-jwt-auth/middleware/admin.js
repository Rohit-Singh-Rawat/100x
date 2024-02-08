const jwt = require('jsonwebtoken');
const config = require('../config');
const JWT_SECRET = config.JWT_SECRET
const { Admin } = require("../db/index");
// Middleware for handling auth

async function adminMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    try {
        const decodeToken = jwt.verify(token, JWT_SECRET)
        const username = decodeToken.username
        if (username) {
            const admin = await Admin.findOne({
                username,
            })
            if (admin) {
                next();
            }
            else {
                res.status(403).json({
                    msg: "You are not authenticated"
                })
            }
        }
        else{
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

module.exports = adminMiddleware;