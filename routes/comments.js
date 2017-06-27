'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();


//create comment

router.post('/', (req, res, next) => {
  const newMessage = req.body;
  return knex('comments')
  .returning('*')
  .insert(newMessage)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
})


//read comment

router.get('/', function(req, res, next) {
    knex('comments')
        .select('id', 'body')
        .then(results => {
            res.send(results)
        })
});

router.get('/:id', (req, res, next) => {
    let id = +req.params.id;
    knex('comments')
        .select('id', 'body')
        .where('id', id)
        .then(results => {
            res.render('one-comment', {
                comment: results[0]
            })
        })
});


//delete messages

router.delete('/:id', (req, res, next) => {
  let id = +req.params.id
      knex('comments')
        .where('id', id)
        .returning('*')
        .del()
        .then(data => {
          let id = data[0].id
          let name = data[0].title
          let message = data[0].body
          res.json({
            id,
            title,
            body
          })
        })
})

module.exports = router;
