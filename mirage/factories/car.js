import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.name.findName() },
  year() { return faker.finance.amount(1990,2010,4) },
  available() { return faker.random.boolean() },
});