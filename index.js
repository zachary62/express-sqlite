const express = require('express');
const mustacheExpress = require('mustache-express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3010;

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

const db = new sqlite3.Database('database/database.sqlite');

app.get('/', (req, res) => {
  db.all('SELECT id, name FROM todos', (err, todos) => {
    res.render('todos', { todos: todos });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
