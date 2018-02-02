import zmq from 'zeromq';

const socket = zmq.socket('push');
let counter = 0;

socket.connect('tcp://127.0.0.1:5678');

setInterval(() => {
    socket.send(counter)
    console.log('Sent', counter++);
}, 1000)