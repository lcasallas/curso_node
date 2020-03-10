const Model = require('./model');

function addUser(dataUser) {
  const myUser = new Model(dataUser);
  myUser.save();
}

async function getUsers(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: filterUser };
  }
  const users = await Model.find(filter);
  return users;
}
module.exports = {
  addUser: addUser,
  getUsers: getUsers,
};
