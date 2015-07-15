var articles = require('../fake-data/articles');

module.exports = function(app) {
  var express = require('express');
  var zeitdeRouter = express.Router();

  zeitdeRouter.get('/', function(req, res) {
    res.send(articles);
  });

  zeitdeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  zeitdeRouter.get('/:id', function(req, res) {
    res.send({
      'zeitde': {
        id: req.params.id
      }
    });
  });

  zeitdeRouter.put('/:id', function(req, res) {
    res.send({
      'zeitde': {
        id: req.params.id
      }
    });
  });

  zeitdeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/zede', zeitdeRouter);
};
