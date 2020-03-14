const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
//bogyParser es un metodo de express que nos permite trabajar en el body de la peticion.
const bodyParser = require('body-parser');
const socket = require('./socket');

const db = require('./db');

//Se importa el router personalizado.
const router = require('./network/routes');

db(config.dbUrl);
//inicializa express
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//agrego el router a la app de express
// app.use(router);
socket.connect(server);

router(app);

//ejemplo basico
// app.use('/', function(request, response) {
//   response.send('hola');
// });

app.use(config.publicRoute, express.static('public'));

server.listen('4000', function() {
  console.log(`La aplicacion esta escuchando en ${config.host}:${config.port}`);
});
