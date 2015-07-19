import Ember from 'ember';

const INCREMENT_STEP = 10;

export default Ember.Component.extend({
  loadMore: function() {
    this.incrementProperty('offset', INCREMENT_STEP);
    this.sendAction('updateListAction');
  },

  actions: {
    loadMore: function() {
      this.loadMore();
    }
  }
});
