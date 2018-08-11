const io = require('socket.io')();

io.listen(3001)

io.on('connection', (socket) => {
  console.log("new connection");
});
