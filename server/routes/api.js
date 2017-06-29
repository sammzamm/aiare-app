'use strict';

const comments = require('./comments');


const express = require('express');
const router = express.Router();

router.use('/comments', comments);

module.exports = router;
