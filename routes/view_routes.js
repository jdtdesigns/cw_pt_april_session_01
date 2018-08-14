var Shop = require('../models').Shop;
var Coffee = require('../models').Coffee;

// Coffee.create({
//   type: 'Medium',
//   name: 'Original'
// }).then(function() {

// });


// Shop.create({
//   name: 'Starbucks'
// }).then(function(shop) {
//   shop.createCoffee({
//     name: 'Original',
//     type: 'Dark'
//   }).then(function() {
//     console.log('it worked!');
//   });
// });


// Shop.find({
//   where: {
//     id: 3
//   }
// }).then(function(shop) {
//   shop.createCoffee({
//     name: 'Americano',
//     type: 'Dark'
//   }).then(function() {
//     console.log('coffee created');
//   })
// });




module.exports = function(app) {
  // Request is what you get from the user/client/front end
  // Response is how we interact with the front/client/user
  app.get('/', function (request, response) {
    Shop.findAll({
      include: Coffee
    }).then(function (shops) {
      response.render('home', { shop_listing: shops });
    });
    // Shop.findAll().then(function (shops) {
      
    // });
  });  


  app.post('/checkin', function(request, response) {
    var ticket = request.body.ticket;
    var user = request.body.user;
    var ride = request.body.ride;

    Ticket.find({
      where: {
        ticket_number: ticket
      }
    }).then(function(ticket) {
      if ( !ticket ) {
        response.send({error: 'You are not authorized'})
      } else {
        // good to go
        Ride.findById(id).then(function(ride) {
          ride.createUser({
            user: user,
            ticket: ticket
          }).then(function () {
            response.redirect('/ride/' + ride.id);
          });
        });
      }
    });
  })
  
}