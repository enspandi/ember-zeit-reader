var newspaperArticles = require('../fake-data/newspaper-articles');
var onlineArticles    = require('../fake-data/online-articles');

var articles = {
  '/api/zei': newspaperArticles,
  '/api/zede': onlineArticles
};

module.exports = function(app) {
  var express = require('express');
  var zeitdeRouter = express.Router();

  zeitdeRouter.get('/', function(req, res) {
    res.send(articles[req.baseUrl]);
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

  app.use('/api/*', zeitdeRouter);
};
