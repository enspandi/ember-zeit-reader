import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    loadMore: function() {
      this.incrementProperty('offset', 10);
      this.sendAction('updateModelAction');
    }
  }
});
