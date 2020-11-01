const { Sequelize, QueryTypes } = require('sequelize');

// Option 1: Passing a connection URI
const db = new Sequelize('postgres', 'postgres', 'password', {
  host: 'roa-postgres',
  port: '5432',
  dialect: 'postgres',
});

module.exports = { QueryTypes, db };
