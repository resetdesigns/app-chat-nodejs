const socket = io();

socket.on('countUpdated', (count) => {
	console.log('The count has been updated to ', count);
});

const button = document.querySelector('#increment');
button.addEventListener('click', () => {
	console.log('clicked');
	socket.emit('increment');
});
