const jwt = require('jsonwebtoken');

const secret = 'serfgres21';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: 'missing auth token' });
    const decode = jwt.verify(token, secret);
    req.user = decode.data;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'jwt malformed' });
  }
};