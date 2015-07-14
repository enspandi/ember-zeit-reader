import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  primaryKey: 'uuid',

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType, isSingle) {
    payload.articles = payload.matches;
    delete payload.matches;

    payload.articles.forEach(function(article) {
      article.links = { details: article.uri };
      delete article.uri;
    });

    // Remove deprecations
    delete payload.href;
    delete payload.offset;
    delete payload.limit;
    delete payload.found;
    delete payload.id;
    delete payload.value;
    delete payload.uri;

    return this._super(store, primaryModelClass, payload, id, requestType, isSingle);
  }
});
