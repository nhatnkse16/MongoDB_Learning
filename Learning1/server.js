const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});


var port = process.env.PORT || 3334;
app.listen(port, () => {
    console.log(`Example app listen on port: http://localhost:${port}`)
});