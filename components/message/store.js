//AQUI VA TODA LA LOGICA DE ALMACENAMIENTO.
const Model = require('./model');

function addMessage(fullMessage) {
  const myMessage = new Model(fullMessage);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
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
