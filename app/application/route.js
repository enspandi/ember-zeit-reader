import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    refreshArticles: function() {
      this.refresh();
    }
  }
});
