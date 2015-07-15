/* jshint node: true */
var zeitApi = require('./zeit-api.json');

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-zeit-reader',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API_KEY: zeitApi['key']
  };

  if (environment === 'development') {
    ENV.host = 'http://api.zeit.de';
    ENV.namespace = 'product';
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://api.zeit.de/",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    }
  }

  if (environment === 'test') {
    ENV.host = 'http://localhost:4200';
    ENV.namespace = 'api';
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = 'http://api.zeit.de';
    ENV.namespace = 'product';
  }

  return ENV;
};
