const express = require('express');
const router = require('./users/router');

const root = express.Router({ mergeParams: true });

root.use('/users', router);

module.exports = root;