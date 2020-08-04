const express = require('express');
const { sequelize } = require('../models');

const router = express.Router();
const { models } = sequelize;

/* GET messages listing. */
router.get('/', (req, res, next) => {
  models.message.findAll({
    attributes: ['id', 'sender', 'content', 'createdAt'],
    raw: true,
  })
    .then((messages) => {
      res.send(messages);
    });
});

module.exports = router;
