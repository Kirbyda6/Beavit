const express = require('express');
const app = express();
const db = require('./db-connector');
const cors = require('cors');
PORT = 8056;
app.use(express.json())
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
    next();
  });

app.get('/', function(req, res) {
    res.send("The server is running!")
});

// Read Operations for Tables

app.get('/users', function(req, res) {
    query1 = 'SELECT * FROM Users;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/posts', function(req, res) {
    query1 = 'SELECT * FROM Posts;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/comments', function(req, res) {
    query1 = 'SELECT * FROM Comments;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/comms', function(req, res) {
    query1 = 'SELECT * FROM Communities;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/commsUsrs', function(req, res) {
    query1 = 'SELECT * FROM Community_User_Base;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

// Delete operations for Tables

app.delete('/posts/:id', function(req, res) {
    query1 = `DELETE FROM Posts WHERE PostID = ${req.params.id};`;

    db.pool.query(query1, function (err, results, fields){
        res.send('Deleted!');
    });
});

app.delete("/delete/:username", (req, res) => {
    
    const username = req.params.username
        
    db.pool.query('DELETE FROM Users WHERE Username = ?', username, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            //res.send(JSON.stringify(results))--> NEEDED IF WE DON'T USE AXIOS
            res.send(result);
        }
    }
    );
});

// Create operations for Tables

app.post('/posts', function(req, res) {
    query1 = `INSERT INTO Posts (OP_UserID, PostTitle, ThumbsUpCt, ThumbsDwnCt, DatePosted, Communities_CommunityID)
    VALUES (${req.body.poster}, '${req.body.title}', 0, 0, '2021-11-7', ${req.body.community});`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.post("/addUser", (req, res) => {
    const username = req.body.username;
    const userJoinDate = req.body.userJoinDate;
    const userThumbsUp = req.body.userThumbsUp;
    const userThumbsDown = req.body.userThumbsDown;

    db.pool.query(
        'INSERT INTO Users (Username, JoinDate, ThumbsUpCt, ThumbsDwnCt) VALUES (?,?,?,?);', 
        [username, userJoinDate, userThumbsUp, userThumbsDown], (err, result) => {
            if (err) {
                console.log(error)
            } else {
                res.send("User added")
            }
        }
        );
});

// Update operations for Tables

app.put('/posts', function(req, res) {
    query1 = `UPDATE Posts SET OP_UserID = ${req.body.poster}, PostTitle = '${req.body.title}',
            ThumbsUpCt = ${req.body.ThumbsUpCt}, ThumbsDwnCt = ${req.body.ThumbsDwnCt},
            DatePosted = '${req.body.date}', Communities_CommunityID = ${req.body.community}
            WHERE PostID = ${req.body.postID};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
    
});

app.listen(PORT, function() {
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});