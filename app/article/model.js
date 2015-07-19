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
  
  authorNames: Ember.computed.mapBy('details.authors', 'name'),
  hasAuthors: Ember.computed.gt('authorNames.length', 0)
});
