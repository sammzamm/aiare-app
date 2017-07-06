'use strict';

const observations = require('./observations');
const signin = require('./signIn');
const express = require('express');
const router = express.Router();
const myProfile = require('./myProfile');
const comments = require('./comments');
const users = require('./users');

router.use('/observations', observations);
router.use('/signin', signin);
router.use('/myprofile', myProfile);
router.use('/comments', comments);
router.use('/users', users);

// router.use('./observations', observations)

module.exports = router;
