const express = require('express');
const { Pool } = require('pg');

const app = express();

// Database connection configuration
const pool = new Pool({
  user: 'your_username',
  host: 'your_database_host',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432, // PostgreSQL default port
});

// Test database connection
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database:', result.rows[0].now);
  }
});

// Your Express routes for retrieving data from the database go here

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/get-data', (req, res) => {
    pool.query('SELECT * FROM your_table', (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Error retrieving data' });
      } else {
        res.json(result.rows);
      }
    });
  });
  