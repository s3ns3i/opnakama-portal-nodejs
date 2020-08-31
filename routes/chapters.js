const express = require('express');
const { sequelize } = require('../models');

const router = express.Router();
const { models } = sequelize;

const CHAPTERS_LIMIT = 3;

/* GET messages listing. */
router.get('/', (req, res) => {
  const options = {
    attributes: ['id', 'comic_id', 'chapter', 'subchapter', 'volume', 'name'],
    raw: true,
    limit: CHAPTERS_LIMIT,
    include: [{
      model: models.fs_comic,
      attributes: ['name', 'stub'],
    }],
    order: [['chapter', 'DESC']],
  };
  if (req.query.stub) {
    options.where = { '$fs_comic.stub$': req.query.stub };
  }
  if (req.query.size) {
    options.limit = +req.query.size;
  }
  models.fs_chapter.findAll(options)
    .then((chapters) => {
      res.send(chapters);
    });
});

module.exports = router;
