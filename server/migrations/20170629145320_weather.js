
exports.up = function(knex) {
  return knex.schema.createTable('weather', (table) => {
    table.increments();
    table.integer('forecast_low_temp').notNullable();
    table.integer('forecast_high_temp').notNullable();
    table.string('forecast_sky_visibility', 255).notNullable();
    table.string('forecast_precipitation', 255).notNullable();
    table.string('forecast_wind')
    table.string('forecast_notes').notNullable();
    table.integer('actual_low_temp').notNullable();
    table.integer('actual_high_temp').notNullable();
    table.string('actual_sky_visibility', 255).notNullable();
    table.string('actual_precipitation', 255).notNullable();
    table.string('actual_weather', 255).notNullable();
    table.string('actual_wind').notNullable();
    table.integer('weather_id').references('id').inTable('observational_data');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('weather')
};
