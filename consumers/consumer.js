import zmq from 'zeromq';

const socket = zmq.socket('pull');

socket.on('message', (message) => {
    console.log('Received ', JSON.parse(message));
});

socket.connect('tcp://127.0.0.1:5600');
