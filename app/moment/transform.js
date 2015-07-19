import DS from 'ember-data';

/**
  * Use moment.js to create a Ember Data transform, saving moment dates in
  * the ember store, instead of javascript dates.
  *
  * @method toMoment
  * @param {String} dateStr Date string given by the zeit api
  * @returns {Object} Date as moment object
  */
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
