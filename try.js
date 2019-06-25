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

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

P.getPokemonByName(1, function (response, error) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});


P.getPokemonsList({
  limit: 151,
  offset: 0
}, (response) => console.log(response));