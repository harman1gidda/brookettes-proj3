/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sites').del()
  await knex('sites').insert([
    {id: 1, site_name: 'LA Air Force Base'},
    {id: 2, site_name: 'Fort Bragg'},
    {id: 3, site_name: 'Wright-Patterson'}
  ]);
};
