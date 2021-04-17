const mysql = require('mysql');
require('dotenv').config();


const db = mysql.createConnection({
    host: process.env.DB_URL,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) console.log('Could not connect to database - ', err);
    else console.log('Connected to database...');
});


module.exports = db;