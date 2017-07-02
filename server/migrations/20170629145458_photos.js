
exports.up = function(knex) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.string('other_photo_1');
    table.string('other_photo_2');
    table.string('other_photo_3');
    table.integer('photos_id').references('id').inTable('observational_data');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('photos')
};
