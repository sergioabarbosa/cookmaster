const express = require('express');
const create = require('./create');
const list = require('./list');
const get = require('./get');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;