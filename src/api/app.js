require('dotenv').config();
const express = require('express');
const path = require('path');
const { json } = require('body-parser');
const root = require('./controllers/root');

const app = express();
app.use(json());

app.use('/', root);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
