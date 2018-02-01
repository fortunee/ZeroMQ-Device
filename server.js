import zmq from 'zeromq';

const socket = zmq.socket('push');
let counter = 0;

socket.bind('tcp://0.0.0.0:5678', (err) => {
    // if (err) throw err.message;
    if (err) {
        console.log(err.message);
        process.exit(0);
    }

    setInterval(() => {
        socket.send(counter)
        console.log('Sent', counter++);
    }, 1000)

})