import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['offset'],
  offset: 0,

  actions: {
    loadMore: function() {
      this.incrementProperty('offset', 10);
      this.send('findByOffset', this.get('offset'));
    }
  }
});
