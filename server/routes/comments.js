'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('comments')
    .join('users', 'users.id', 'comments.user_id')
    .then((comments) => {
      res.send(comments);
    })
})


module.exports = router;
