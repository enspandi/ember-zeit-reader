import ENV from '../config/environment';


export function initialize() {
  /**
  * Add 'X-Authorization' header to every ajax request to authenticate with
  * zeit online api.
  *
  * @method authenticateZeitApi
  * @param {Object} options The requested options
  * @param {Object} originalOptions Options provided with the ajax method
  * @param {Object} jqXHR jQuery XHR object of the request
  * @returns nothing
  */
  let authenticateZeitApi = function(options, originalOptions, jqXHR) {
    if (!jqXHR.crossDomain) {
      jqXHR.setRequestHeader('X-Authorization', ENV.API_KEY);
    }
  };

  Ember.$.ajaxPrefilter(authenticateZeitApi);
}

export default {
  name: 'ajax-initializer',
  initialize: initialize
};
