const initializer = require('socket.io');

module.exports = function init(server) {
  const io = initializer(server);

  io.on('connection', (socket) => {
    console.debug('user connected');
    socket.on('message', (message) => io.emit('message_confirm', {
      ...message,
      date: new Date(),
    }));
  });
};
