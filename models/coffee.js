'use strict';
module.exports = function (sequelize, DataTypes) {
  var Coffee = sequelize.define('Coffee', {
    type: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});

  Coffee.associate = function (models) {
    // associations can be defined here
    Coffee.belongsTo(models.Shop, { foreignKey: { allowNull: false } });
  };
  return Coffee;
};