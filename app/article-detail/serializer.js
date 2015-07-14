import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    authors: { embedded: 'always' }
  },

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    /*payload. = payload.;
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
    delete payload.uri;*/
    let authors = payload.creators;

    authors.forEach(function(author) {
      delete author.rel;
      author.id = `${payload.uuid}${Math.trunc(Math.random()*10)}`;
    });

    payload = {
      articleDetail: {
        id: `${payload.uuid}detail`,
        authors: authors
      }
    };
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
