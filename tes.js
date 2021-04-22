const { User, Shipment, Destination, ShipmentDestination } = require('./models')

// function calculateDistance(current, destination) {
//   // getDistance(
//   //   { latitude: 51.5103, longitude: 7.49347 },
//   //   { latitude: "51° 31' N", longitude: "7° 28' E" }
//   // );
//   let distance = geolib.getDistance(current, destination) / 1000
//   return distance
// }

let a = { latitude: -7.025253, longitude: 107.51976 }
let b = { latitude: -6.2, longitude: 106.816666 }

console.log(Destination.calculateDistance(a, b))