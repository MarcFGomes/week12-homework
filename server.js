const express = require('express');
const { Pool } = require('pg');

const CLI = require("./src/index");
const ui = require('./ui');
const db = require('./queries');


const PORT = process.env.PORT || 5432;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: 'PASSWORD123+',
    host: 'localhost',
    database: 'homework'
  },
  console.log(`Connected to the homework database.`)
)

pool.connect();

let deletedRow = 2;

/* pool.query(
  `DELETE FROM favorite_books WHERE id = $1`,
  [deletedRow],
  (err, { rows }) => {
    if (err) {
      console.log(err);
    }
    console.log(rows);
  }
);
 */

// Query database
pool.query('SELECT * FROM products', function (err, { rows }) {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



new CLI().run();