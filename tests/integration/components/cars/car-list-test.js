
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let cars = [
	{id: 1, name: 'testing 1'},
	{id: 2, name: 'testing 2'}
];

moduleForComponent('cars/car-list', 'Integration | Component | cars/car list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('objs', cars);
    
    // Template block usage:
    this.render(hbs`
      {{cars/car-list cars=objs}}
    `);
  
    assert.equal(this.$(".item-wrapper").length, 2);
});