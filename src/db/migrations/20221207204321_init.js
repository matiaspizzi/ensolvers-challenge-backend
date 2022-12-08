exports.up = function (knex) {

  return knex.schema
    .createTable('notes', function (table) {
      table.increments('id').primary()
      table.string('title', 100).notNullable()
      table.string('content', 300).notNullable()
      table.boolean('archived').notNullable().defaultTo(false)
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('tags', function (table) {
      table.increments('id').primary()
      table.string('name', 20).notNullable()
    })
    .createTable('note_tags', function (table) {
      table.increments('id').primary()
      table.integer('note_id').unsigned().notNullable()
      table.integer('tag_id').unsigned().notNullable()
      table.foreign('note_id').references('notes.id')
      table.foreign('tag_id').references('tags.id')
    })
    .then(() => {
      console.log('Tables created successfully')
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('note_tags')
    .dropTable('tags')
    .dropTable('notes')
};
