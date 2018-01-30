import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  model(){
    return get(this, 'store').createRecord('car');
  },

  setupController(controller, model){
    this._super(...arguments);
    set(controller, 'car', model);
  },

  actions: {
    save(car){
      car.save().then(() => this.transitionTo('cars')); 
    }
  }
});