import DS from 'ember-data';

export default DS.Model.extend({
  authors: DS.hasMany('author')
});
