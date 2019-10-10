const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  //Calling find returns a promise that resolves to an array of all schemes in the database
  return db('schemes');
}

function findById(id) {
  //Expects a scheme id as its only parameter
  return db('schemes') //Resolve to a single scheme object.
    .where({ id }) // looks to match the column id in the table
    .first(); // first id that it matches return that single object not an array with that object inside of the array.
}

function findSteps(id) {
  return db('steps as st')
    .join('schemes as sc', 'st.scheme_id', 'sc.id')
    .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .orderBy('st.step_number')
    .where({ 'st.scheme_id': id });
}

function add(scheme) {
  return db('schemes').insert(scheme, 'id');
}

function update(changes, id) {
  return db('schemes')
    .update('scheme_name', changes.scheme_name)
    .where({ id });
}

function remove(id) {
  return db('schemes')
    .del()
    .where({ id });
}
