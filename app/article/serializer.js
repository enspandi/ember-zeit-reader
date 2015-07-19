import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  primaryKey: 'uuid',

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType, isSingle) {
    this.checkRootKey(payload);
    this.replaceUriWithLinks(payload.articles);
    this.setArticleType(payload.articles, payload.id);
    this.removeUnusedProperties(payload);

    return this._super(store, primaryModelClass, payload, id, requestType, isSingle);
  },

  checkRootKey: function(payload) {
    if (payload && payload.hasOwnProperty('matches')) {
      payload.articles = payload.matches;
      delete payload.matches;
    }
  },

   /**
    * Set the article type to distinguish between newspaper and online articles
    *
    * @method setArticleType
    * @param {Array} articles List of article hashes
    * @param {String} type Type of article
    * @returns nothing
    */
  setArticleType: function(articles, type) {
    articles.forEach(function(article) {
      article.type = type;
    });
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
