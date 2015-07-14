import { moduleForModel, test } from 'ember-qunit';

moduleForModel('article-detail', 'Unit | Model | article detail', {
  // Specify the other units that are required for this test.
  needs: ['model:author']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
