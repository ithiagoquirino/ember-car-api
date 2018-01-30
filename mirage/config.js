export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://salabimsalabompoto.com/api';

  this.get('/cars', 'cars');

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

