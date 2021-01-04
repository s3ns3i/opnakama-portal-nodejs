const initializer = require('socket.io');
const { sequelize } = require('../models');

async function handleMessage(io, messageDto) {
  const { models } = sequelize;
  try {
    const message = await models.message.create(messageDto);
    io.emit('message_confirm', {
      id: message.id,
      sender: message.sender,
      content: message.content,
      createdAt: message.createdAt,
    });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = function init(server) {
  const io = initializer(server);

  io.on('connection', (socket) => {
    // eslint-disable-next-line no-console
    socket.on('message', (message) => handleMessage(io, message));
  });
};
