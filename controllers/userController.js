"use strict";
const {
  User,
  Shipment,
  Destination,
  ShipmentDestination,
} = require("../models");

class Controller {
  static profilUser(req, res) {
    User.findAll()
      .then((data) => {
        res.render("halamanUser", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static register(req, res) {
    res.render("add-user");
  }
  static registerHandler(req, res) {
    let dataRegister = {
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      address: req.body.address,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    User.create(dataRegister)
      .then((data) => {
        res.send("berhasil");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static edit(req, res) {
    User.findByPk(+req.params.id)
      .then((data) => {
        res.render("edit-user", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static editHandler(req, res) {
    console.log(req.body);
  }
}

module.exports = Controller;
