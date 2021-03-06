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

test('shows 10 articles', function(assert) {
  visit('/zeit-online');
  andThen(function() {
    assert.equal(find('.item').length, 10, 'has 10 articles');
  });
});

test('shows article details', function(assert) {
  visit('/zeit-online');
  andThen(function() {
    assert.equal(find('.author').length, 8, 'has 8 authors');
  });
});
