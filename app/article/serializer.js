import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  primaryKey: 'uuid',

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType, isSingle) {
    this.checkRootKey(payload);
    this.replaceUriWithLinks(payload.articles);
    this.removeUnusedProperties(payload);

    return this._super(store, primaryModelClass, payload, id, requestType, isSingle);
  },

  checkRootKey: function(payload) {
    if (payload && payload.hasOwnProperty('matches')) {
      payload.articles = payload.matches;
      delete payload.matches;
    }
  },

  removeUnusedProperties: function(payload) {
    delete payload.href;
    delete payload.offset;
    delete payload.limit;
    delete payload.found;
    delete payload.id;
    delete payload.value;
    delete payload.uri;
  }
});
