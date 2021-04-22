'use strict'
const { User, Shipment, Destination, ShipmentDestination } = require('../models')

class Controller {

  static list(req, res) {
    Shipment.findAll({ where: { UserId: req.params.user_id }, order: [['createdAt', 'DESC']] })
      .then(shipments => {
        res.render('./list-shipment', { shipments, user_id: req.params.user_id })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAdd(req, res) {
    res.render('./add-shipment', { user_id: req.params.user_id })
  }

  static postAdd(req, res) {
    let location = req.body.location.split(', ')
    let current_latitude = location[0]
    let current_longitude = location[1]
    let UserId = req.params.user_id
    Shipment.create({ current_latitude, current_longitude, UserId })
      .then(() => {
        res.redirect(`/shipments/${UserId}/list`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller