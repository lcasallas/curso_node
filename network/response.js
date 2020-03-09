exports.success = function(req, res, message, status) {
  res.status(status || 200).send({
    error: '',
    body: message,
  });
};

exports.error = function(req, res, message, status, details) {
  //Este console se realiza con el fin de poder revisar los errores de manera detallada, y no informarlos al usuario, solo se le informa el message.
  console.error('[response error]', details);
  res.status(status || 500).send({
    error: message,
    body: '',
  });
};
