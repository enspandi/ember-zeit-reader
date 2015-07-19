import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  isNewSerializerAPI: true,

  /**
    * Replace `uri` keys with a `links: { ... }` hash for async loading
    * depending resources (e.g. article's details)
    *
    * @method replaceUriWithLinks
    * @param {Array} list List of hashes containing `uri` key
    * @return {Object} JSON-API Document
    */
  replaceUriWithLinks: function(list) {
    list.forEach(function(item) {
      item.links = { details: item.uri };
      delete item.uri;
    });
  }
});
