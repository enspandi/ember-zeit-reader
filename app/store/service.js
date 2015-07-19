import DS from 'ember-data';

export default DS.Store.extend({

 /**
  * Helper function for loading records by query params into the store
  * and then returning all locally stored records including older ones.
  *
  * @method queryAndAll
  * @param {String} modelName The model name (e.g. 'article')
  * @param {Object} queryParams Query parameters (e.g. '{offset: 10}')
  * @returns {DS.RecordArray}
  */
  queryAndAll: function(modelName, queryParams) {
    const type = queryParams.articleType;
    return this.query(modelName, queryParams)
              .then(this.peekAll.bind(this, modelName))
              .then(this.filterByType.bind(this, type));
  },

  filterByType: function(type, records) {
    return records.filterBy('type', type);
  }
});
