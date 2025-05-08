const Booking = require("../models/Booking");

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  try {
    const booking = await Booking.create({
      user: req.user._id,
      activity: activityId,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate(
    "activity"
  );
  res.json(bookings);
};
