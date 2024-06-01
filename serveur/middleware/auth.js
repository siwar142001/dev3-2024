const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('No token, authorization denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
     
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Token is not valid');
    }
};

module.exports = { authenticate };