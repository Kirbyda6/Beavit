var express = require('express');
var app = express();
var db = require('./db_conn')
PORT = 7352;
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res) {
        res.send("The server is running!")
});

app.get('/hi', function(req, res) {
    res.send("Hi!")
});

app.get('/db', function(req, res) {
    query1 = 'SELECT * FROM Posts;';

    // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

    // DROP TABLE...
    db.pool.query(query1, function (err, results, fields){
        // Send the results to the browser
        res.send(JSON.stringify(results));
    });
});

app.listen(PORT, function() {
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});