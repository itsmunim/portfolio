var express = require('express');
var router = express.Router();

router.use('/count', require('./project.count.js'));
router.use('/info', require('./about.me'));

module.exports = router