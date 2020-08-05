const express = require('express');
const { sequelize } = require('../models');

const router = express.Router();
const { models } = sequelize;

const MESSAGE_LIMIT = 200;

/* GET messages listing. */
router.get('/', (req, res, next) => {
  models.message.count()
    .then((messagesNo) => {
      const options = {
        attributes: ['id', 'sender', 'content', 'createdAt'],
        raw: true,
      };
      if (MESSAGE_LIMIT < messagesNo) {
        options.limit = MESSAGE_LIMIT;
        options.offset = messagesNo - MESSAGE_LIMIT;
      }
      models.message.findAll(options)
        .then((messages) => {
          res.send(messages);
        });
    });
});

module.exports = router;
