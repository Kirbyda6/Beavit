//Setup
const express = require('express');
const app = express();
const PORT = 8056;
const db = require('./db-connector');




//Routes

app.get("/", function(req, res)
    {
        query1 = 'SELECT * FROM Users;';

        db.pool.query(query1, function (err, results, fields) {
            res.send(JSON.stringify(results))
        });
    });


//Listener
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})