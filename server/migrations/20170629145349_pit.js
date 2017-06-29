
exports.up = function(knex) {
  return knex.schema.createTable('pit', (table) => {
    table.increments();
    table.boolean('pit_slide_wrist');
    table.boolean('pit_slide_elbow');
    table.boolean('pit_slide_shoulder');
    table.boolean('pit_slide_body_weight');
    table.boolean('pit_slide_jump');
    table.string('pit_photo');
    table.integer('pit_id').references('id').inTable('observational_data');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pit')
};
