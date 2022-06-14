const users = [];
const rooms = [];

const addUser = ({ id, username, room }) => {
	// Clean the data
	username = username.trim().toLowerCase();
	room = room.trim().toLowerCase();
	// Validate the data
	if (!username || !room) {
		return {
			error: 'Username and room are required!',
		};
	}

	// Check for existing user
	const existingUser = users.find((user) => {
		return user.room === room && user.username === username;
	});

	// Validate username
	if (existingUser) {
		return {
			error: 'Username is in use!',
		};
	}

	// Store user
	const user = { id, username, room };
	users.push(user);

	// Store room
	if (rooms.indexOf(room) === -1) {
		rooms.push(room);
	}
	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index != -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = (id) => {
	return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
	room = room.trim().toLowerCase();
	return users.filter((user) => user.room === room);
};

const getRooms = () => {
	return rooms;
};

const removeRoom = (room) => {
	const index = rooms.findIndex((room) => room === room);
	if (index != -1) {
		return rooms.splice(index, 1)[0];
	}
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom, getRooms, removeRoom };
