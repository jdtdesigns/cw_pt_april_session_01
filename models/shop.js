'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shop = sequelize.define('Shop', {
    name: DataTypes.STRING
  }, {});

  Shop.associate = function(models) {
    
    // associations can be defined here
    Shop.hasMany(models.Coffee);
  };
  return Shop;
};