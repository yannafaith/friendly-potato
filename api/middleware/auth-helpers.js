const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: user => {
        const payload = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            email: user.email,
        };

        const secret = process.env.JWT_SECRET || 'secret';

        const options = {
            expiresIn: '1d',
        };

        return jwt.sign(payload, secret, options);
    },

    protected: (req, res, next) => {
        const token = req.headers.authorization;
        const secret = process.env.JWT_SECRET || 'secret';

        if (token) {
            jwt.verify(token, secret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({ message: 'Invalid token' });
                } else {
                    req.token = decodedToken;
                    next();
                }
            });
        } else {
            res.status(401).json({ message: 'Unauthorized: No token provided' });
        }
    },
};