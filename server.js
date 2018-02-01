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
        console.log(counter++);
        socket.send('Hello ZMQ')
    }, 1000)

})