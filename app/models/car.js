import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  name:       attr('string'),
  year:       attr('string'),
  available:  attr('boolean')
});