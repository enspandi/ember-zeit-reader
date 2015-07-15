import Ember from 'ember';

export default Ember.Controller.extend({
  offset: 0,

  actions: {
    loadMore: function() {
      const offset = this.get('offset') + 10;
      this.set('offset', offset);
      this.store.query('article', { articleType: 'zede', offset: offset })
        .then((newArticles) => {
          this.set('model', newArticles);
        })
    }
  }
});
