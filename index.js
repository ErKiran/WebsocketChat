const express = require('express');
const socket = require('socket.io');
const app = express();
/*app.get('/', (req, res) => {
    res.json('Hello Socket')
})*/

app.use(express.static('public'));

const server = app.listen(4000, () => console.log('Server is up and running in port 4000'));
const io = socket(server);
io.on('connection', (socket) => {
    console.log(`Socket Connected,${socket.id}`);
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
})
