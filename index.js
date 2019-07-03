require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();
app.use(express.json());
// postgres://[username]:[password]@[host]:[port]/[database]
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
});

app.get('/api/pets', (req, res) => {
  const db = req.app.get('db');
  db.get_pets().then(pets => {
    res.send(pets);
  });
});

app.post('/api/pets', (req, res) => {
  const db = req.app.get('db');
  const { name, type } = req.body;
  //   db.create_pet([name, type]).then(dbRes => {
  db.create_pet({ name, type }).then(dbRes => {
    console.log('dbRes', dbRes);
    res.sendStatus(200);
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
