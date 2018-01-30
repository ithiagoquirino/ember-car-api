import Route from '@ember/routing/route';
import { set, get } from '@ember/object';
 
export default Route.extend({
	model(param){
		return get(this, 'store').peekRecord('car', param.car_id) ? get(this, 'store').peekRecord('car', param.car_id) : get(this, 'store').findRecord('car', param.car_id);
	},
	
	setupController(controller, model){
		set(controller, 'car', model);
		this._super(...arguments);	
	},

	actions: {
		save(car){
			car.save().then(() => this.transitionTo('cars'));
		}
	}
});
