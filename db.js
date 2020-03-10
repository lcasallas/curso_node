const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
  //conexion
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('[db] conectada con exito');
}

module.exports = connect;
