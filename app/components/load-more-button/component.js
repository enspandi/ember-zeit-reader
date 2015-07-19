import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['button', 'button-block', 'button-stable'],

  click: function() {
    this.attrs['on-load-more']();
  }
});
