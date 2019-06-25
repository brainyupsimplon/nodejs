const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello ');
})

app.get('/about', function (req, res) {
    res.send('about me');
})

app.get('/work/:projectName', function (req, res) {
    res.send('work - '+ req.params.projectName);
})

app.listen(3000, function () {
    console.log('server ready');
})