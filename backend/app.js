const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});