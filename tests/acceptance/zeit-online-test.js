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

test('shows 3 articles', function(assert) {
  visit('/zeit-online');
  andThen(function() {
    assert.equal(find('article').length, 3, 'has 3 articles');
  });
});
