const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 4000;

const connection = mysql.createConnection({
  host: 'tu_host_db',
  user: 'root',
  password: 'rootpassword',
  database: 'mydb'
});

app.get('/alumnos', (req, res) => {
  connection.query('SELECT * FROM alumnos', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servicio REST corriendo en http://localhost:${port}`);
});
