const express = require('express');
//response es un modulo creado por nosotros para poder estandarizar las respuestas para las diferentes peticiones.
const response = require('../../network/response');
const controller = require('./controller');
//router de express -> nos permite separar nuestras peticiones al maximo.
const router = express.Router();

//GET
router.get('/', function(req, res) {
  const filterUser = req.query.name || null;

  controller
    .getUsers(filterUser)
    .then(userList => {
      response.success(req, res, userList, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error inesperado', 500, error);
    });
});

router.post('/', function(req, res) {
  controller
    .addUSer(req.body.name, req.body.doc)
    .then(dataUser => {
      response.success(req, res, dataUser, 201);
    })
    .catch(error => {
      response.error(req, res, 'informacion invalida', 400, error);
    });
});

module.exports = router;
