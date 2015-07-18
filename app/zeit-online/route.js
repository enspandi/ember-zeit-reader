import Ember from 'ember';

const ONLINE_ARTICLES = 'zede';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.queryAndAll('article', { articleType: ONLINE_ARTICLES, offset: params.offset });
  },

  actions: {
    refreshArticles: function() {
      this.refresh();
    }
  }
});
