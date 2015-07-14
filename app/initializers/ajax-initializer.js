import ENV from '../config/environment';

export function initialize() {
  Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    if (!jqXHR.crossDomain) {
      jqXHR.setRequestHeader('X-Authorization', ENV.API_KEY);
    }
  });
}

export default {
  name: 'ajax-initializer',
  initialize: initialize
};
