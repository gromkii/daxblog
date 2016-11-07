
exports.up = function(knex, Promise) {
 return knex.schema.createTable('test', t => {
  t.increments(),
  t.integer('num')
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('test')
};
