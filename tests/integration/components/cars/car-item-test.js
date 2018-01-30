import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

let car = EmberObject.create({
		id: 1,
		name: "testing"
});

moduleForComponent('cars/car-item', 'Integration | Component | cars/car item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('obj', car);

  // Template block usage:
  this.render(hbs`
    {{cars/car-item car=obj}}
  `);

  assert.equal(this.$(".link").text().trim(), car.name);
});
