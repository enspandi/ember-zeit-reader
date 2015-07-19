import DS from 'ember-data';
import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    authors: { embedded: 'always' }
  },

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    this.normalizeAuthors(payload.creators);

    payload = {
      articleDetail: {
        id: this.generateDetailsId(payload.uuid),
        authors: payload.creators
      }
    };
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  generateDetailsId: function(articleId) {
    return `${articleId}detail`;
  },

  normalizeAuthors: function(authors) {
    authors.forEach(function(author) {
      delete author.rel;
      author.id = author.name;
    });
  }
});
