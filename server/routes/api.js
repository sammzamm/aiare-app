'use strict';

const comments = require('./comments');
const observations = require('./observations')

const express = require('express');
const router = express.Router();

router.use('/comments', comments);
// router.use('./observations', observations)

module.exports = router;
