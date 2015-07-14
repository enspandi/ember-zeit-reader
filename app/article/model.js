import DS from 'ember-data';

export default DS.Model.extend({
  href: DS.attr('string'),
  releaseDate: DS.attr('string'),
  subtitle: DS.attr('string'),
  supertitle: DS.attr('string'),
  teaserText: DS.attr('string'),
  teaserTitle: DS.attr('string'),
  title: DS.attr('string'),

  //details: DS.belongsTo('articleDetails'),

  timeAgo: Ember.computed('releaseDate', function() {
    return this.get('releaseDate');
  })
});
