const jwt = require('jsonwebtoken');
require('dotenv').config()

const authMiddleware = (req, res, next) => {
    const Authorization = req.headers.Authorization || req.headers.authorization

    if (Authorization && Authorization.startsWith('Bearer')) {
        const token = Authorization.split(' ')[1];
        jwt.verify(token, process.env.JWTKEY, (err, info) => {
            if (err) {
                return res.status(402).json({ error: "Unauthorized. Invalid Token" })
            }
            req.user = info;
            next()
        })
    } else {
        return res.status(402).json({ error: "Unauthorized. No Token" })
    }
}

module.exports = { authMiddleware }