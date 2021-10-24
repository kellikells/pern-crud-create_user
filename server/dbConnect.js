require('dotenv').config();


const Pool = require('pg').Pool;



const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = pool;