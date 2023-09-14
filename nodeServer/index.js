// const { Socket } = require("socket.io");

const io = require('socket.io')(8000);// we establish the connection with socket.io module and use it on the port number 8000

const user = {};// we create an empty object to insert the new user data into this object

io.on('connection', socket => {
    // This part sets up a listener for new connections.
    // When a client connects to the server using Socket.io,
    // this callback function is executed.
    // The `socket` parameter represents the individual socket/connection.

    socket.on('new-user-joined', name => {
        // This part sets up a listener for the 'new-user-joined' event.
        // When a client emits the 'new-user-joined' event, this callback function is executed.
        // The `name` parameter likely represents the name of the new user who joined.
        console.log('new user joined', name);
        user[socket.id] = name;
        socket.broadcast.emit('new-user-joined', name);
    });

    socket.on('send message', message => {
        socket.broadcast.emit(' message received', { message: message, name: user[socket.id] });
    });
});


