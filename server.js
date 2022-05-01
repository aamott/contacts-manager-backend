const express = require('express');
const app = express();
const database = require('./db/connect');
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

database.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});