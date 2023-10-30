const soap = require('soap');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

// Configuración de la conexión a MySQL
const dbConfig = {
  host: 'direccion_del_servidor_mysql',  // Asegúrate de poner la dirección correcta
  user: 'root',
  password: 'rootpassword',
  database: 'mydb'
};

const service = {
  MyService: {
    MyPort: {
      ConsultaAlumnosNombres: async function(args) {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM alumnos ORDER BY apellidos, nombres');
        connection.close();
        return {
          resultado: rows
        };
      },
      ConsultaAlumnosNota: async function(args) {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM alumnos ORDER BY nota DESC');
        connection.close();
        return {
          resultado: rows
        };
      }
    }
  }
};

const xml = require('fs').readFileSync('./service.wsdl', 'utf8');

const app = express();
app.use(bodyParser.raw({ type: function() { return true; }, limit: '5mb' }));
app.listen(3000, function() {
  soap.listen(app, '/wsdl', service, xml);
});
