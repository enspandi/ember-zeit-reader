import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  primaryKey: 'uuid',

  normalizePayload: function(payload) {
    payload.articles = payload.matches;
    delete payload.matches;
    return payload;
  }
});
