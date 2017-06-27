
exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('body', 255).notNullable();
    table.integer('observational_data_id').references('id').inTable('observational_data');
    table.integer('user_id').references('id')inTable('users');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
