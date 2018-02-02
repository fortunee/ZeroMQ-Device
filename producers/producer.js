import zmq from 'zeromq';
import axios from 'axios';

const socket = zmq.socket('push');
const URL = 'http://5a746a4e61c2a40012894a84.mockapi.io/api/orders';
let counter = 0;

setInterval(() => {
    axios.get(URL).then((orders) => {
        if (counter < 100) {
            socket.send(JSON.stringify({name: orders.data[counter] }))
            console.log('New data sent...', counter++);
        } else {
            console.log('Job done')
            process.exit(0);
        }
    }).catch(err => {
        console.error(err)
        process.exit(0);
    });
}, 1000)

console.log('Getting ready...');

socket.connect('tcp://127.0.0.1:5678');
