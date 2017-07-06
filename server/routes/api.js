'use strict';

const observations = require('./observations');
const signin = require('./signIn');
// const signup = require('./signup');
const express = require('express');
const router = express.Router();
const myProfile = require('./myProfile');
const comments = require('./comments')

router.use('/observations', observations);
router.use('/signin', signin);
// router.use('/signup', signup);
router.use('/myprofile', myProfile);
router.use('/comments', comments);

// router.use('./observations', observations)

module.exports = router;
