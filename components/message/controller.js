//AQUI VAN LA LOGICA DE NEGOCIO.

const store = require('./store');
const socket = require('../../socket').socket;
const config = require('../../config');

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos.');
    }

    let fileUrl = '';
    if (file) {
      fileUrl =
        config.host +
        ':' +
        config.port +
        config.publicRoute +
        '/' +
        config.fileRoute +
        '/' +
        file.filename;
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterMessage) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterMessage));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid Data');
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('id invalido');
      return false;
    }
    store
      .deleteMessage(id)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
