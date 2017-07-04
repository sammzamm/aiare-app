exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email', 30).unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable().defaultTo('$2a$10$1TqtrM2gmNM.TGUaZR50Ze.kKLg.OGGUBLhjj3JGckki5f50gQjoe');
    table.string('city', 30).notNullable();
    table.string('state', 12).notNullable();
    table.string('profile_pic').defaultTo('../../client/src/images/avitar.png');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
