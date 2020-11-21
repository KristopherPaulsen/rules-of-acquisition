const { Sequelize, QueryTypes } = require('sequelize');

const db = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : new Sequelize(
      process.env.POSTGRES_DATABASE,
      process.env.POSTGRES_USERNAME,
      process.env.POSTGRES_PASSWORD,
      {
        host: 'roa-postgres',
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
      }
  );

module.exports = { QueryTypes, db };
