//AQUI VA TODA LA LOGICA DE ALMACENAMIENTO.

const db = require('mongoose');

const Model = require('./model');

db.Promise = global.Promise;
//conexion
db.connect(
  'mongodb+srv://db_user_lecode:PZxTfBizVWOrUpQ7@cluster0-neaoj.mongodb.net/foodplaner',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

console.log('[db] conectada con exito');

function addMessage(fullMessage) {
  // list.push(fullMessage);
  const myMessage = new Model(fullMessage);
  myMessage.save();
}

async function getMessages() {
  // return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get,
  //update,
  //delete,
};
