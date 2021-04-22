const router = require("express").Router();
const ShipmentController = require("../controllers/shipmentController");

router.get("/:user_id/list", ShipmentController.list)

router.get("/:user_id/add", ShipmentController.getAdd)
router.post("/:user_id/add", ShipmentController.postAdd)

module.exports = router;
