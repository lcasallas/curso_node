const store = require('./store');

function addChat(users) {
	if (!users || !Array.isArray(users)) {
		return Promise.reject('invalid user list');
	}

	const chat = {
		users: users,
	};
	return store.addChat(chat);
}

function getChats(userId) {
	return store.getChats(userId);
}

module.exports = {
	addChat,
	getChats,
};
