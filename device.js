import zmq from 'zeromq';

const server = zmq.socket('pull');
const client = zmq.socket('push');
let counter = 0;

server.bind('tcp://0.0.0.0:5678', (err) => {
    if (err) {
        console.log(err.message);
        process.exit(0);
    }

    server.on('message', (message) => {
        client.send(message);
    });
})

client.bind('tcp://0.0.0.0:5600', (err) => {
    if (err) {
        console.log(err.message);
        process.exit(0)
    }
})

// setInterval(() => {
//     socket.send(counter)
//     console.log('Sent', counter++);
// }, 1000)