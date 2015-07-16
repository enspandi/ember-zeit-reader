import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('article', { articleType: 'zede' });
  },

  findByOffset: function(offset) {
    this.store.find('article', { articleType: 'zede', offset: offset })
      .then(this.setAllArticles.bind(this));
  },

  setAllArticles: function() {
    this.set('controller.model', this.store.all('article'));
  },

  actions: {
    findByOffset: function(offset) {
      this.findByOffset(offset);
    }
  }
});
