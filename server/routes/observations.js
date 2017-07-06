'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();


// create observational data post
router.post('/', (req, res, next) => {
  let newPost = req.body
  newPost.owner_id = 1;
  newPost.date_of_outing='2-6-17';
  delete newPost.redirect;
  knex('observational_data')
    .returning('*')
    .insert(newPost)
    .then((post) => {
      res.sendStatus(200)
    })
})


// read observational data post
router.get('/', (req, res, next) => {
  knex('observational_data')
    .returning('*')
    .then(results => {
      res.send(results)
    })
})

router.get('/:id', (req, res, next) => {
  let id = +req.params.id;
  knex('observational_data')
    .where('id', id)
    .then((trip) => {
      let currentTrip = trip[0];
      knex('comments')
        .where('observational_data_id', trip[0].id)
        .join('users', 'users.id', 'comments.user_id')
        .then((comments) => {
          currentTrip.comments = comments;
          knex('users')
          .where('id', trip[0].owner_id)
          .then((user) => {
            currentTrip.user = user[0];
            knex('photos')
              .where('photos_id', trip[0].id)
              .then((photos) => {
                currentTrip.photos = photos[0]
                res.send(currentTrip)
              })
          })
        })
    })
})


module.exports = router;

// edit observational data post


// delete observational data post
