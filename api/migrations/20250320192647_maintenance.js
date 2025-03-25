/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('maintenance', table => {
        table.increments('id');
        table.string('task_title');
        table.integer('site_id');
        table.foreign('site_id').references('sites.id');
        table.date("start_date");
        table.date("end_date");
        table.string("condition_color");
        table.string("approved_rejected");
        table.string('approver_comments');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('maintenance', table =>{
        table.dropForeign('site_id')
    })
    .then(function(){
        return knex.schema.dropTableIfExists('maintenance')
    })
};

//         table.integer('pet_type_id'); //<--makes fk
//         table.foreign('pet_type_id').references(`pet_type.id`); //<fk references pet type


// exports.down = function(knex) {
//     return knex.schema.alterTable('pet', table => {
//         table.dropForeign('pet_type_id') // rollback function drops fk
//     })
//     .then(function(){
//         return knex.schema.dropTableIfExists('pet')
//     });
    
// };