const express = require('express');
//bogyParser es un metodo de express que nos permite trabajar en el body de la peticion.
const bodyParser = require('body-parser');

//Se importa el router personalizado.
const router = require('./network/routes');

//inicializa express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//agrego el router a la app de express
// app.use(router);

router(app);

//ejemplo basico
// app.use('/', function(request, response) {
//   response.send('hola');
// });

app.use('/app', express.static('public'));

app.listen('4000');
console.log('La aplicacion esta escuchando en http://localhost:4000');