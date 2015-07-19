import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
   /**
    * Adapt urls to include the article type in the url to comply with zeit
    * online api.
    *
    * @method urlForQuery
    * @param {Object} query Contains the name and offset parameter
    * @return {String} Returns url
    */
  urlForQuery: function(query) {
    let url = `${this.buildURL()}/${query.articleType}`;
    delete query.articleType;
    return url;
  }
});
