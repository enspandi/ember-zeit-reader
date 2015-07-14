import { moduleForModel, test } from 'ember-qunit';

moduleForModel('article-details', 'Unit | Serializer | article details', {
  // Specify the other units that are required for this test.
  needs: ['serializer:article-details']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
