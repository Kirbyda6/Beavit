//Setup
const express = require('express');
const app = express();
const PORT = 8056;
const db = require('./db-connector');

app.use(express.json());


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
    db.pool.query('SELECT Username, JoinDate AS "Join Date", ThumbsUpCt AS "Thumbs Up", ThumbsDwnCt AS "Thumbs Down" FROM Users;')
})




//Listener
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})