//Setup

const express = require('express');
const app = express();
const PORT = 8056;

//Routes

app.get("/", (req, res) => res.send("Testing Nodemon"))

//Listener

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});