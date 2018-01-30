import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {

  this.route('cars', function () {
    this.route('view', { path: '/:car_id' });
    this.route('create');
    this.route('delete', { path: '/delete/:car_id' });
    this.route('edit', { path: '/edit/:car_id' });

  });

});

export default Router;
