//Setup
const express = require('express');
const app = express();
const PORT = 8056;
const db = require('./db-connector');
const cors = require('cors');

app.use(express.json());
app.use(cors())

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
    seeUsersQuery = 'SELECT Username, JoinDate, ThumbsUpCt, ThumbsDwnCt FROM Users;';
    // seeUsersQuery = "SELECT * FROM Users;"  --> TESTING PURPOSES
    db.pool.query(seeUsersQuery , function (err, result){
        if(err) {
            console.log(err)
        } else {
        //res.send(JSON.stringify(results))--> NEEDED IF WE DON'T USE AXIOS
        res.send(result);
        }
    });
})

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