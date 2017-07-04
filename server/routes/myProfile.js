const express = require('express');
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('users')
    .where('id', req.cookies.user)
    .then((result) => {
      let user = result[0]
      knex('observational_data')
        .where('owner_id', user.id)
        .then((trips) => {
          delete user.hashed_password;
          user.trips = trips;
          console.log(user);
          res.json(user);
        })
    })

})


module.exports = router;
