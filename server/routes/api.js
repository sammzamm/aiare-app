'use strict';

const observations = require('./observations')
const signin = require('./signIn')
const express = require('express');
const router = express.Router();

router.use('/observations', observations);
router.use('/signin', signin);

// router.use('./observations', observations)

module.exports = router;
