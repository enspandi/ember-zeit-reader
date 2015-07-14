import DS from 'ember-data';

export default DS.Model.extend({
  href: DS.attr('string'),
  releaseDate: DS.attr('moment'),
  subtitle: DS.attr('string'),
  supertitle: DS.attr('string'),
  teaserText: DS.attr('string'),
  teaserTitle: DS.attr('string'),
  title: DS.attr('string'),

  details: DS.belongsTo('articleDetail', { async: true }),

  authors: Ember.computed.mapBy('details.authors', 'name'),
  hasAuthors: Ember.computed.gt('authors.length', 0),
  authorsText: Ember.computed('authors', function() {
    return this.get('authors').join(' - ');
  }),

  timeAgo: Ember.computed('releaseDate', function() {
    return this.get('releaseDate').fromNow();
  })
});
