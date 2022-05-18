//Setup
const express = require('express');
const app = express();
const PORT = 8056;
const db = require('./db-connector');

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//General Route Test
app.get('/', function(req, res) {
    res.send("Working")
});

//User Routes
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

app.get("/users", (req, res) => {
    query1 = 'SELECT Username, JoinDate, ThumbsUpCt, ThumbsDwnCt FROM Users;';
    
    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
})

//Post Routes
app.get('/posts', function(req, res) {
    query1 = 'SELECT * FROM Posts;';

    db.pool.query(query1, function (err, results, fields){
        res.send(JSON.stringify(results));
    });
});



//Listener
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})