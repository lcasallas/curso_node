const store = require('./store');

function addUSer(user, doc) {
  return new Promise((resolve, reject) => {
    if (!user || !doc) {
      console.log('[userController] no hay usuario o documento');
      return reject('Los datos son incorrectos');
    }
    const dataUser = {
      name: user,
      doc: doc,
    };
    store.addUser(dataUser);
    resolve(dataUser);
  });
}

function getUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.getUsers(filterUser));
  });
}

module.exports = {
  addUSer,
  getUsers,
};
