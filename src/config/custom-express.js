require('../app/rotas/rotas.js');

//modulo para tratar html e realizar loops
// Importante marcar o --ignore *.marko.js no arquivo de npm start caso pretenda trabalhar com marko e nodemon
require('marko/node-require').install();
require('marko/express');

const express = require('express');
const rotas = require('../app/rotas/rotas.js');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

// Essa função server para que ele crie rotas para o servidor, sendo seus métodos e parâmetros mapeados através da função.
rotas(app);

module.exports = app;