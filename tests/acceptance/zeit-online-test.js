import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-zeit-reader/tests/helpers/start-app';

var application;

module('Acceptance | zeit online', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /zeit-online', function(assert) {
  visit('/zeit-online');

  andThen(function() {
    assert.equal(currentURL(), '/zeit-online');
  });
});
