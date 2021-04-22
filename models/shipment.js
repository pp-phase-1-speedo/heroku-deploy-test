'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shipment.belongsTo(models.User)
      Shipment.belongsToMany(models.Destination, { through: models.ShipmentDestination })
    }
  };
  Shipment.init({
    current_latitude: DataTypes.STRING,
    current_longitude: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};