const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid Format',
  '500': 'Internal erro',
};

exports.success = function(req, res, message, status) {
  let statusCode = status;
  let statusMessage = message;

  if (!status) {
    status = 200;
  }

  if (!message) {
    statusMessage = statusMessages[status];
  }

  res.status(statusCode).send({
    error: '',
    body: statusMessage,
  });
};

exports.error = function(req, res, message, status, details) {
  //Este console se realiza con el fin de poder revisar los errores de manera detallada, y no informarlos al usuario, solo se le informa el message.
  console.error('[response error]', details);
  res.status(statusMessages[status]).send({
    error: message,
    body: '',
  });
};
