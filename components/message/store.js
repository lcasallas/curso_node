//AQUI VA TODA LA LOGICA DE ALMACENAMIENTO.
const Model = require('./model');

function addMessage(fullMessage) {
  const myMessage = new Model(fullMessage);
  myMessage.save();
}

function getMessages(filterMessage) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterMessage !== null) {
      filter = { chat: filterMessage };
    }
    Model.find(filter)
      .populate('chat')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function deleteMessage(id) {
  return Model.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  deleteMessage: deleteMessage,
};
