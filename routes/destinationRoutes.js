const router = require("express").Router();
const DestinationController = require("../controllers/destinationController");

router.get("/:shipment_id/list", DestinationController.list)

router.get("/:shipment_id/add", DestinationController.getAdd)
router.post("/:shipment_id/add", DestinationController.postAdd)

module.exports = router;
