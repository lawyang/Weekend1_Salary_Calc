
// Require in express from tis Node module
// express is a function, but you wouldn't just know that by looking at it.
const express = require('express');

// this gives us back an instance application - it i ohect o
const app = express();
// Tells explresss where to look for files whn getting request from someones browser
app.use( express.static( 'server/public') );

// start listennino
const port = 4000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
    
})