export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://salabimsalabompoto.com/api';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.get('/cars', () => {
    return {
      "cars": [
        {
          "id": 1,
          "name": "Gol City",
          "year": "1998",
          "available": false
        },
        {
          "id": 2,
          "name": "HB20",
          "year": "2016",
          "available": true
        }
      ]
    }
  });

  this.get('/cars/:car_Id', 'car')

  this.post('/cars', (db, request) => {
    return db.cars.create(JSON.parse(request.requestBody).car);
  });
 
  this.put('/cars/:car_id', (db, request) => {
    return db.cars.find(request.params.car_id).update(
      JSON.parse(request.requestBody).car);
  });

  this.del('/cars/:car_id', function(db, request) {
    db.cars.find(request.params.car_id).destroy();
  });
}

