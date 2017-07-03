const express = require('express');
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/', (req, res, next) => {
 console.log(req.body);
 knex('users')
  .where('email', req.body.email)
  .then((data) => {
   if (bcrypt.compareSync(req.body.password, data[0].hashed_password)) {
    delete data[0].hashed_password
    console.log(data[0]);
    res.json(data[0]);
   }
  })
})


module.exports = router
