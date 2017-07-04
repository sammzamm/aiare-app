'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('observational_data', (table)=>{
    table.increments();
    table.integer('owner_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
    table.dateTime('date_time').notNullable();
    table.string('location', 255).notNullable();
    table.string('sub_region', 255).notNullable();
    table.string('aspect', 255).notNullable();
    table.integer('elevation').notNullable();
    table.integer('slope_angle').notNullable();
    table.boolean('loose_dry');
    table.boolean('loose_wet');
    table.boolean('wet_slab');
    table.boolean('storm_slab');
    table.boolean('wind_slab');
    table.boolean('persistant_slab');
    table.boolean('deep_slab');
    table.boolean('cornice');
    table.boolean('fresh_snow');
    table.boolean('warming');
    table.boolean('weak_layers');
    table.specificType('layer', 'json[]');
    table.string('snowpack', 255).notNullable();
    table.integer('snowpack_in_feet').notNullable();
    table.integer('snowpack_in_inches').notNullable();
    table.boolean('pit_slide_wrist');
    table.boolean('pit_slide_elbow');
    table.boolean('pit_slide_shoulder');
    table.boolean('pit_slide_body_weight');
    table.boolean('pit_slide_jump');
    table.string('pit_photo');
    table.integer('forecast_low_temp').notNullable();
    table.integer('forecast_high_temp').notNullable();
    table.string('forecast_sky_visibility', 255).notNullable();
    table.string('forecast_precipitation', 255).notNullable();
    table.integer('forecast_wind').notNullable();
    table.integer('forecast_gust').notNullable();
    table.integer('actual_low_temp').notNullable();
    table.integer('actual_high_temp').notNullable();
    table.string('actual_sky_visibility', 255).notNullable();
    table.string('actual_precipitation', 255).notNullable();
    table.string('actual_weather', 255).notNullable();
    table.string('actual_wind').notNullable();
    table.text('ideal_approach').notNullable();
    table.text('backup_approach').notNullable();
    table.text('trip_report').notNullable;
    table.string('route_photo');
    table.integer('user_id').references('id').inTable('users');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('observational_data')
};
