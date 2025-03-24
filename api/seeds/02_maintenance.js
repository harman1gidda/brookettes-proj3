// const { default: Maintenance } = require("../migrations/20250320192647_maintenance");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('maintenance').del()
  await knex('maintenance').insert([
    {task_title: 'Brook Broke Something', site_id: '1', start_date: '2025-03-01', end_date: '2025-03-07', condition_color: 'Red', approved_rejected: 'true', approver_comments: 'Approved by Capt Duck'},
    {task_title: 'Damon almost Broke Something', site_id: '3', start_date: '2025-03-05', end_date: '2025-03-09', condition_color: 'Green', approved_rejected: 'false', approver_comments: ''},
    {task_title: 'Renamed Again', site_id: '2', start_date: '2025-03-20', end_date: '2025-03-22', condition_color: 'Yellow', approved_rejected: 'false', approver_comments: ''}
  ]);
};

