import DS from 'ember-data';
import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    authors: { embedded: 'always' }
  },

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    let authors = payload.creators;

    authors.forEach(function(author) {
      delete author.rel;
      author.id = author.name;
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
