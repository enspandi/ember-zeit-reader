import DS from 'ember-data';

let toMoment = function(dateStr) {
  return moment(dateStr);
};

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return toMoment(serialized);
  },

  serialize: function(deserialized) {
    return deserialized.format('YYYY-MM-DD HH:mm:ss');
  }
});
