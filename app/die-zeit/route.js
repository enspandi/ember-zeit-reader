import Ember from 'ember';

const NEWSPAPER_ARTICLES = 'zei';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.queryAndAll('article', { articleType: NEWSPAPER_ARTICLES, offset: params.offset });
  },

  actions: {
    refreshArticles: function() {
      this.refresh();
    }
  }
});
