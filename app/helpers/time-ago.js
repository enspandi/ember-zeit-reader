import Ember from 'ember';

export function timeAgo([momentDate]) {
  return momentDate.fromNow();
}

export default Ember.Helper.helper(timeAgo);
