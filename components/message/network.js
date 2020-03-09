//AQUI VA LA ADMINISTRACION DE LAS PETICIONES.

const express = require('express');

//response es un modulo creado por nosotros para poder estandarizar las respuestas para las diferentes peticiones.
const response = require('../../network/response');

const controller = require('./controller');

//router de express -> nos permite separar nuestras peticiones al maximo.
const router = express.Router();

//GET
router.get('/', function(req, res) {
  controller
    .getMessages()
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(error => {
      response.error(req, res, 'Unexpected Error', 500, error);
    });
});

//POST
router.post('/', function(req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(fullMessage => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(error => {
      response.error(
        req,
        res,
        'Informacion invalida',
        400,
        'Error en el controlador'
      );
    });
});

module.exports = router;
