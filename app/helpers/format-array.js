import Ember from 'ember';

export function formatArray([array]) {
  return array.join(' - ');
}

export default Ember.Helper.helper(formatArray);
