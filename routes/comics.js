const express = require('express');
const { sequelize } = require('../models');

const router = express.Router();
const { models } = sequelize;

/* GET messages listing. */
router.get('/', (req, res) => {
  const options = {
    attributes: ['id', 'name', 'stub'],
    raw: true,
    order: [['name', 'ASC']],
    where: {
      hidden: false,
    },
  };
  models.fs_comic.findAll(options)
    .then((comics) => {
      res.send(comics);
    });
});

module.exports = router;
