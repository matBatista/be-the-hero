const knex = require('knex');
const configuration = require('../../knexfile');

const conncetion = knex(configuration.development);

module.exports = conncetion;