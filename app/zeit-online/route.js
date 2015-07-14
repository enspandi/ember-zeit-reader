import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { id: 1, title: 'test1', timeAgo: '3 hrs', href: 'http://zeit.de/test1' },
      { id: 2, title: 'test2', timeAgo: '4 hrs',  href: 'http://zeit.de/test2' },
      { id: 3, title: 'test3', timeAgo: '7 hrs',  href: 'http://zeit.de/test3' }
    ];
  }
});
