exports.up = (knex) =>
  knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("name").notNullable();

    table
      .integer("note_id")
      .references("id")
      .intable("notes")
      .onDelete("CASCADE");
    table.integer("user_id").references("id").intable("notes");
  });

exports.down = (knex) => knex.schema.dropTable("tags");
