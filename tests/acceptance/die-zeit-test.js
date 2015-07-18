import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-zeit-reader/tests/helpers/start-app';

var application;

module('Acceptance | die zeit', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('shows 10 articles', function(assert) {
  visit('/die-zeit');
  andThen(function() {
    assert.equal(find('.item').length, 10, 'has 10 articles');
  });
});

test('shows article details', function(assert) {
  visit('/die-zeit');
  andThen(function() {
    assert.equal(find('.author').length, 8, 'has 8 authors');
  });
});
