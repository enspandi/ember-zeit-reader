import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForQuery: function(query, modelName) {
    let url = `${this.buildURL()}/${query.articleType}`;
    delete query.articleType;
    return url;
  }
});
