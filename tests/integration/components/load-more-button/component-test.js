import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('load-more', 'Integration | Component | load more', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{load-more-button}}`);

  assert.equal(this.$().text().trim(), 'Mehr Laden');
});
