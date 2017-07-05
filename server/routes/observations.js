'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();


// create observational data post
router.post('/', (req, res, next) => {
  const newPost = req.body
  console.log(newPost);
  newPost.owner_id = 1;
  knex('observational_data')
    .returning('*')
    .insert(newPost)
    .then((thing) => {
      console.log(thing);
      res.sendStatus(200)}
    )
    .catch((err) => (err))
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
    .select('*')
    .where('id', req.params.id)
    .join('comments', 'comments.observational_data_id', 'observational_data.id')
    .then(results => {
      res.render('one-post', {
        comment: results[0]
      })
    })
})


module.exports = router;

// edit observational data post


// delete observational data post
