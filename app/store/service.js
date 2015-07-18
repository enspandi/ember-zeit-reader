import DS from 'ember-data';

export default DS.Store.extend({
  
  /**
   * Helper function for loading records by query params into the store
   * and then returning all records from the store including older ones.
   */
   queryAndAll: function(modelName, queryParams) {
    return this.query(modelName, queryParams)
              .then(this.peekAll.bind(this, modelName));
    }
});
