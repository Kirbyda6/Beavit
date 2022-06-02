const express = require('express');
const app = express();
const db = require('./db_connector');
const cors = require('cors');
const { query } = require('express');
PORT = 8048;
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
    // const query1 = ;

    db.pool.query('SELECT * FROM Users;', function (err, results, fields){
        if(err) {
            console.log(err)
        }
        res.send(JSON.stringify(results));
    });
});

app.get('/users/:username', function(req, res) {
    const username = req.params.username
    db.pool.query('SELECT * FROM Users WHERE Username = ?;', username, function (err, results, fields){
        //res.send(results);
        res.send(JSON.stringify(results));
    });
});

app.get('/posts', function(req, res) {
    const query1 = 'SELECT * FROM Posts;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/comments', function(req, res) {
    const query1 = 'SELECT * FROM Comments;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/comms', function(req, res) {
    const query1 = 'SELECT * FROM Communities;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/commsUsrs', function(req, res) {
    const query1 = 'SELECT * FROM Community_User_Base;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/usrSearch/:id', function(req, res) {
    const query1 = `SELECT Username FROM Users WHERE UserID = ${req.params.id};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/commSearch/:id', function(req, res) {
    const query1 = `SELECT CommunityName FROM Communities WHERE CommunityID = ${req.params.id};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.get('/postSearch/:id', function(req, res) {
    const query1 = `SELECT PostTitle FROM Posts WHERE PostID = ${req.params.id};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

// Delete operations for Tables

app.delete('/posts/:id', function(req, res) {
    const query1 = `DELETE FROM Posts WHERE PostID = ${req.params.id};`;

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
            res.send(result);
        }
    }
    );
});

app.delete('/comments/:id', function(req, res) {
    const query1 = `DELETE FROM Comments WHERE CommentID = ${req.params.id};`;

    db.pool.query(query1, function (err, results, fields){
        res.send('Deleted!');
    });
});

app.delete('/community/:id', function(req, res) {
    const query1 = `DELETE FROM Communities WHERE CommunityID = ${req.params.id};`;

    db.pool.query(query1, function (err, results, fields){
        res.send('Deleted!');
    });
});

app.delete('/commUsrs/:usrID/:commID', function(req, res) {
    const query1 = `DELETE FROM Community_User_Base WHERE Communities_CommunityID = ${req.params.commID}
            AND Users_UserID = ${req.params.usrID};`;

    db.pool.query(query1, function (err, results, fields){
        res.send('Deleted!');
    });
});

// Create operations for Tables

app.post('/posts', function(req, res) {
    const query1 = `INSERT INTO Posts (OP_UserID, PostTitle, ThumbsUpCt, ThumbsDwnCt, DatePosted, Communities_CommunityID)
    VALUES (
        ${req.body.poster},
        "${req.body.title}",
        ${req.body.ThumbsUpCt},
        ${req.body.ThumbsDwnCt},
        '${req.body.date}',
        ${req.body.community}
        );`;

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
                console.log(err)
            } else {
                res.send("User added")
            }
        }
        );
});

app.post('/comments', function(req, res) {
    const query1 = `INSERT INTO Comments (
        ThumbsUpCt,
        ThumbsDwnCt,
        DateMade,
        CommentStr,
        Commenter_UserID,
        Parent_Post_PostID,
        Parent_Comment_CommentID
        )
    VALUES (
        ${req.body.thmbsUp},
        ${req.body.ThmbsDwn},
        '${req.body.date}',
        "${req.body.comment}",
        ${req.body.user},
        ${req.body.parentPost},
        ${req.body.parentCmnt}
        );`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
        if(err) {
            console.log(err)
        }
    });
});

app.post('/community', function(req, res) {
    const query1 = `INSERT INTO Communities (CommunityName, MemberCt) VALUES ("${req.body.comm}", ${req.body.cnt})`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.post('/usrComm', function(req, res) {
    const query1 = `INSERT INTO Community_User_Base (Users_UserID, Communities_CommunityID, ModeratorStatus)
    VALUES (${req.body.user}, ${req.body.comm}, ${req.body.mod});`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

// Update operations for Tables

app.put('/posts', function(req, res) {
    const query1 = `UPDATE Posts SET OP_UserID = ${req.body.poster}, PostTitle = "${req.body.title}",
            ThumbsUpCt = ${req.body.ThumbsUpCt}, ThumbsDwnCt = ${req.body.ThumbsDwnCt},
            DatePosted = '${req.body.date}', Communities_CommunityID = ${req.body.community}
            WHERE PostID = ${req.body.postID};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.put('/comments', function(req, res) {
    const query1 = `UPDATE Comments SET 
            ThumbsUpCt = ${req.body.thmbsUp},
            ThumbsDwnCt = ${req.body.ThmbsDwn},
            DateMade = '${req.body.date}',
            CommentStr = "${req.body.comment}",
            Commenter_UserID = ${req.body.user},
            Parent_Post_PostID = ${req.body.parentPost},
            Parent_Comment_CommentID = ${req.body.parentCmnt}
            WHERE CommentID = ${req.body.cmtID};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
        if(err) {
            console.log(err)
        }
    });
});

app.put('/addMod/:usrID/:commID', function(req, res) {
    const query1 = `UPDATE Community_User_Base SET ModeratorStatus = 1 WHERE Communities_CommunityID = ${req.params.commID}
    AND Users_UserID = ${req.params.usrID};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.put('/remMod/:usrID/:commID', function(req, res) {
    const query1 = `UPDATE Community_User_Base SET ModeratorStatus = 0 WHERE Communities_CommunityID = ${req.params.commID}
    AND Users_UserID = ${req.params.usrID};`;

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});

app.listen(PORT, function() {
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});