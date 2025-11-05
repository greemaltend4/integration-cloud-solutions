const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur lAPI dIntégration de Solutions Cloud !');
});

app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});