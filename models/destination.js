"use strict";
const geolib = require('geolib')
const convertMeterToKm = require('../helpers/convertMeterToKm')

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    getPrice(distance) {
      let price = 83 * distance // Rp 83 per km
      if (price < 10000) {
        price = 10000
      }
      return Math.round(price / 1000) * 1000
    }

    static calculateDistance(current, destination) {
      // getDistance(
      //   { latitude: 51.5103, longitude: 7.49347 },
      //   { latitude: "51° 31' N", longitude: "7° 28' E" }
      // );
      let distance = geolib.getDistance(current, destination)
      return convertMeterToKm(distance)
    }

    static associate(models) {
      // define association here
      Destination.belongsToMany(models.Shipment, {
        through: models.ShipmentDestination,
      });
    }
  };
  Destination.init({
    recipient_name: DataTypes.STRING,
    destination_latitude: DataTypes.STRING,
    destination_longitude: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    price: DataTypes.INTEGER
    // city_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};
