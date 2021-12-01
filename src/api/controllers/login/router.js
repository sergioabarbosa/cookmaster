const express = require('express');
const create = require('./loginUser');

const router = express.Router({ mergeParams: true });

router.post('/', create);

module.exports = router;