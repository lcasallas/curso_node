//AQUI VA LA ADMINISTRACION DE LAS PETICIONES.

const express = require('express');
const multer = require('multer'); //todo lo que tiene que ver con la transmision de archivos.
//response es un modulo creado por nosotros para poder estandarizar las respuestas para las diferentes peticiones.
const response = require('../../network/response');

const controller = require('./controller');

//router de express -> nos permite separar nuestras peticiones al maximo.
const router = express.Router();

//PREPARACION DE MULTER
const upload = multer({
  dest: 'public/files/', //ruta de guardar archivo.
});

//GET
router.get('/', function(req, res) {
  const filterMessage = req.query.chat || null;

  controller
    .getMessages(filterMessage)
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(error => {
      response.error(req, res, 'Unexpected Error', 500, error);
    });
});

//POST
router.post('/', upload.single('file'), function(req, res) {
  console.log(req.file);
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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

//PATCH
router.patch('/:id', function(req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

//DELETE
router.delete('/:id', function(req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

module.exports = router;
