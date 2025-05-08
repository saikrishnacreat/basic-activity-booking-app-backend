const express = require("express");
const { bookActivity, getMyBookings } = require("../controllers/bookingController");
const protect = require("../middlewares/auth");
const router = express.Router();

router.post("/book", protect, bookActivity);
router.get("/my", protect, getMyBookings);

module.exports = router;