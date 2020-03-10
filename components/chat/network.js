const express = require('express');
//response es un modulo creado por nosotros para poder estandarizar las respuestas para las diferentes peticiones.
const response = require('../../network/response');
const controller = require('./controller');
//router de express -> nos permite separar nuestras peticiones al maximo.
const router = express.Router();

//GET
router.get('/:userId', function(req, res) {
	controller
		.getChats(req.params.userId)
		.then(userList => {
			response.success(req, res, userList, 200);
		})
		.catch(error => {
			response.error(req, res, 'Error inesperado', 500, error);
		});
});

router.post('/', function(req, res) {
	controller
		.addChat(req.body.users)
		.then(data => {
			response.success(req, res, data, 201);
		})
		.catch(error => {
			response.error(req, res, 'informacion invalida', 400, error);
		});
});

module.exports = router;
