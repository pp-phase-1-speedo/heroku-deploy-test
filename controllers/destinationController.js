'use strict'
const { User, Shipment, Destination, ShipmentDestination } = require('../models')
const moneyFormatter = require('../helpers/moneyFormatter')

class Controller {
  static list(req, res) {
    Shipment.findOne({ where: { id: req.params.shipment_id }, include: { model: Destination } })
      .then(shipment => {
        let current_coordinate = { latitude: +shipment.current_latitude, longitude: +shipment.current_longitude }
        shipment.Destinations.forEach(destination => {
          let latitude = +destination.destination_latitude
          let longitude = +destination.destination_longitude
          let destination_coordinate = { latitude, longitude }
          destination.distance = Destination.calculateDistance(current_coordinate, destination_coordinate)
          destination.price = destination.getPrice(destination.distance)
        })
        // res.send(shipment)
        res.render('list-destination', { destinations: shipment.Destinations, moneyFormatter })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAdd(req, res) {
    Destination.findAll({ order: [['recipient_name', 'ASC']] })
      .then(destinations => {
        // res.send(destinations)
        res.render('./add-destination', { shipment_id: req.params.shipment_id })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static postAdd(req, res) {
    let ShipmentId = req.params.shipment_id
    let recipient_name = req.body.name
    let coordinate = req.body.coordinate.split(', ')
    let destination_latitude = coordinate[0]
    let destination_longitude = coordinate[1]
    Destination.create({ recipient_name, destination_latitude, destination_longitude })
      .then((result) => {
        let DestinationId = result.id
        return ShipmentDestination.create({ ShipmentId, DestinationId })
      })
      .then(() => {
        res.redirect(`/destinations/${ShipmentId}/list`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller