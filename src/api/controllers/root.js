const express = require('express');
const router = require('./users/router');
const login = require('./login/router');

const root = express.Router({ mergeParams: true });

root.use('/users', router);
root.use('/login', login);

module.exports = root;