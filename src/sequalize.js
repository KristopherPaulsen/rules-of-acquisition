const { Sequelize, QueryTypes } = require('sequelize');

const match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
const db = new Sequelize(match[5], match[1], match[2], {
    dialect:  'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
    },
    port:     match[4],
    host:     match[3],
    ssl: true,
})

module.exports = { QueryTypes, db };
