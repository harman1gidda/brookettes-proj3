/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sites').del()
  await knex('sites').insert([
    {site_name: 'LA Air Force Base'},
    {site_name: 'Fort Bragg'},
    {site_name: 'Wright-Patterson'}
  ]);
};
