import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  model(param){
    return get(this, 'store').peekRecord('car', param.car_id) ? 
           get(this, 'store').peekRecord('car', param.car_id) :
           get(this, 'store').findRecord('car', param.car_id);
  },

  setupController(controller, model){
    set(controller, 'car', model);
    return this._super(...arguments);
  }
});
