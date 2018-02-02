import zmq from 'zeromq';

const socket = zmq.socket('pull');

socket.on('message', (message) => {
    console.log('Received ', message.toString('utf8'));
});

socket.connect('tcp://127.0.0.1:5600');
