// Create web server     
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Send a response with a list of comments
// 5. Start the server on port 3000
// 6. Test the server with Postman

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send('This is a list of comments');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
