const router = require("express").Router();

const userRouter = require("./userRoutes");
const shipmentRouter = require("./shipmentRoutes");
const destinationRouter = require("./destinationRoutes");

router.use("/users", userRouter);
router.use("/shipments", shipmentRouter);
router.use("/destinations", destinationRouter);

module.exports = router;
