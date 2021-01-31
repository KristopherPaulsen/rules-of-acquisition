const { Sequelize, QueryTypes } = require('sequelize');

const match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
console.log(match[3]);
const db = new Sequelize(match[5], match[1], match[2], {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    ssl: true
})

module.exports = { QueryTypes, db };
