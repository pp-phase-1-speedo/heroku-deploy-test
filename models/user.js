"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Shipment);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "username tidak boleh kosong",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "password tidak boleh kosong",
          },
        },
      },
      first_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "First Name tidak boleh kosong",
          },
        },
      },
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Email tidak boleh kosong",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Gender tidak boleh kosong",
          },
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nomor Telfon tidak boleh kosong",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (instance, options) => {
          if (!instance.last_name.length) {
            instance.last_name = instance.first_name;
          }
        },
      },
    }
  );
  return User;
};
