import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
	model(param){
		if(param.car_id){
			get(this, 'store').findRecord('car', param.car_id, { backgroundReload: false }).then((car) => {
				car.destroyRecord().then(() => this.transitionTo('cars'));
			});
		}
	}
});
