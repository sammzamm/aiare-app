'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();


// create observational data post
router.post('/', (req, res, next) => {
  const newPost = req.body
  knex('observational_data')
    .returning('*')
    .insert(newPost)
    .then(() => res.sendStatus(200))
    .catch((err) => (err))
})


// read observational data post
router.get('/', (req, res, next) => {
  knex('observational_data')
    .returning('*')
    .then(results => {
      res.send(results[0])
    })
})

router.get('/:id', (req, res, next) => {
  let id = +req.params.id;
  knex('observational_data')
    .select('*')
    .then(results => {
      res.render('one-post', {
        comment: results[0]
      })
    })
})



// edit observational data post
router.

// delete observational data post




// dateTime
// location
// sub_region
// aspect
// elevation
// slope_angle
// loose_dry
// loose_wet
// wet_slab
// storm_slab
// wind_slab
// persistant_slab
// deep_slab
// cornice
// fresh_snow
// warming
// weak_layers
// snowpack
// snowpack_in_feet
// snowpack_in_inches
// pit_slide_wrist
// pit_slide_elbow
// pit_slide_shoulder
// pit_slide_body_weight
// pit_slide_jump
// pit_photo
// forecast_low_temp
// forecast_high_temp
// forecast_sky_visibility
// forecast_precipitation
// forecast_wind
// forecast_gust
// actual_low_temp
// actual_high_temp
// actual_sky_visibility
// actual_precipitation
// actual_weather
// actual_wind
// ideal_approach
// backup_approach
// trip_report
// route_photo
