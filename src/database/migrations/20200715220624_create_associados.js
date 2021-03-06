exports.up = function (knex) {
  return knex.schema.createTable("associados", function (table) {
    table.string("id").notNullable().primary();
    table.string("tipo").notNullable();
    table.string("patrocinador");
    table.string("nome").notNullable();
    table.string("cpf").notNullable();
    table.string("rg").notNullable();
    table.string("celular").notNullable();
    table.string("endereco").notNullable();
    table.string("bairro").notNullable();
    table.string("cidade").notNullable();
    table.string("banco");
    table.string("agencia");
    table.string("conta");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("associados");
};
