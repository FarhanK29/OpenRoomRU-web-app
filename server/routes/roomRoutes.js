const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Route to get bookings for a specific room and day
router.get('/bookings', roomController.getRoomBookingsByDay);

module.exports = router;
