// Cargamos express
const express = require('express');
const app = express();

// Constante para trabajar los paths
const path = require('path');
// Añadimos morgan para las peticiones
const morgan = require('morgan');
const mysql = require('mysql');
// Se añade la conexión
const myConnection = require('express-myconnection');

//para guardar los datos en la base
app.use(express.urlencoded({}));

// Morgan nos da el tipo de peticiones que se están solicitando
app.use(morgan('dev'));
// // //configurando el motor de plantillas
app.set('view engine', 'ejs');

// //uniendo las rutas
app.set('views', path.join(__dirname, 'views'));

//Se importan las rutas
const clienteRutas = require('./routes/indexRoutes');


// Se configura el puerto
app.set('port', process.env.PORT || 3002);


// Iniciar el server
app.listen(app.get('port'), () => {
    console.log("Server started");
});

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'chanocua24',
    port: '3306',
    database: 'db_beca'
}, 'single'));

app.use('/', clienteRutas)

// module.exports = app;