const express = require('express');
const create = require('./create');
const list = require('./list');
const get = require('./get');
const update = require('./update');
const remove = require('./remove');
const image = require('./image');
const multer = require('../../middlewares/multer');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);
router.put('/:id/image', auth, multer.single('image'), image);
module.exports = router;