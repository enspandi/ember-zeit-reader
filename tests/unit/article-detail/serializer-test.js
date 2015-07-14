import { moduleForModel, test } from 'ember-qunit';

moduleForModel('article-detail', 'Unit | Serializer | article detail', {
  // Specify the other units that are required for this test.
  needs: ['serializer:article-detail', 'model:author']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
