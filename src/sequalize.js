const { Sequelize, QueryTypes } = require('sequelize');

console.log(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);
const match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
const db = new Sequelize(match[5], match[1], match[2], {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    ssl: true,
    logging: true,
})

module.exports = { QueryTypes, db };
