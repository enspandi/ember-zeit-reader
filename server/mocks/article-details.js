module.exports = function(app) {
  var express = require('express');
  var articleDetailsRouter = express.Router();

  articleDetailsRouter.get('/', function(req, res) {

    res.send({
      'article-details': []
    });
  });

  articleDetailsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  articleDetailsRouter.get('/:id', function(req, res) {
    res.send(require('../fake-data/article-details/' + req.params.id));
  });

  articleDetailsRouter.put('/:id', function(req, res) {
    res.send({
      'article-details': {
        id: req.params.id
      }
    });
  });

  articleDetailsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/content', articleDetailsRouter);
};
