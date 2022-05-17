const express = require('express')
const app = express()
const PORT = 3000;

const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_lewitren',
    password        : '7984',
    database        : 'cs340_lewitren'
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports.pool = pool;