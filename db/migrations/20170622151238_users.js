exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.text('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('city', 255).notNullable();
    table.string('state', 255).notNullable();
    table.string('profile_pic')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
