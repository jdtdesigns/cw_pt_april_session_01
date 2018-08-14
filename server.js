var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var view_routes = require('./routes/view_routes');
var path = require('path');
var port = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

view_routes(app);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});


// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('cw_session_01', 'root', '', {
//   dialect: 'mysql',
//   operatorsAliases: false,
//   logging: false
// });

// sequelize
//   .authenticate()
//   .then(function() {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function(err) {
//     console.error('Unable to connect to the database:', err);
//   });


// var Shop = sequelize.define('shop', {
//   name: {
//     type: Sequelize.STRING
//   }
// });

// force: true will drop the table if it already exists
// Shop.sync().then(function() {

//   console.log('table created');
//   // Table create

//   // Shop.create({
//   //   name: 'Dunkin Donuts'
//   // }).then(function () {
//   //   console.log('added the shop');
//   // });
// });

// Shop.findAll().then(function (shops) {
//   console.log(shops[0].name);
// });




// var blah = require('./test');


  // function Person(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }
  
  // var jd = new Person('JD', 38);
  // var sarah = new Person('Sarah', 34);