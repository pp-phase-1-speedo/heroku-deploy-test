"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ShipmentDestinations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ShipmentId: {
        type: Sequelize.INTEGER,
      },
      DestinationId: {
        type: Sequelize.INTEGER,
      },
      ShipmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Shipments",
          key: "id",
        },
      },
      DestinationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Destinations",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ShipmentDestinations");
  },
};
