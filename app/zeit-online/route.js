import Ember from 'ember';

export default Ember.Route.extend({
  zeitApi: Ember.inject.service(),

  model: function() {
    return this.store.query('article', { articleType: 'zede' });
  }
});
