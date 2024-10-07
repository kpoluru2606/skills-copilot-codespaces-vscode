// Create web server     
// 1. Create a web server
// 2. Create a route for /comments
// 3. Read the comments.json file
// 4. Display the comments in the browser
// 5. Add a form to add comments

// 1. Create a web server
const express = require('express');
const app = express();
const fs = require('fs');

// 2. Create a route for /comments
app.get('/comments', (req, res) => {
    // 3. Read the comments.json file
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Could not read comments file');
            return;
        }
        const comments = JSON.parse(data);
        /
    