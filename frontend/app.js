require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

//app.listen(PORT, () => {
  //console.log(`Servidor Frontend rodando na porta ${PORT}`);
//});

module.exports = app;
