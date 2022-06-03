var mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

// Code below was created with assistance from the Node Starter Guide found here: https://github.com/osu-cs340-ecampus/nodejs-starter-app
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_kirbyda',
    password        : process.env.PASSWORD,
    database        : 'cs340_kirbyda'
})

module.exports.pool = pool;
