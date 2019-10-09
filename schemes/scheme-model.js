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

function findSteps() {
  return;
}

function add(params) {
  return;
}

function update(params) {
  return;
}

function remove(params) {
  return;
}
