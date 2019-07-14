const jwt = require('jsonwebtoken');

module.exports = {
    handleErr: (req, res, message, data) => {
        return status === 500 ? res.status(500).send({ message: 'There was a problem with the server'}) : res.status(status).send({ message });
    },
    format: (first, last) => {
        String.prototype.capatalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        return `${first.capatalize()} ${last.capatalize()}`;
    },
    isLoggedIn: (req, res) => {
        const message = "You are not authorized";
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if(!token) return res.status(403).send({ message });
        req.decoded = decoded;
        req.userId = decoded.id;
    },
}