var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_kirbyda',
    password        : 'Carbine6.OSUbscs',
    database        : 'cs340_kirbyda'
})

// Export it for use in our applicaiton
module.exports.pool = pool;