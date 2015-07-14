import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  apiKey: ENV.API_KEY
});
