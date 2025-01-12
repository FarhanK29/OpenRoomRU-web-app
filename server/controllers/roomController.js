const db = require('../db/connection');

// Controller to get all bookings for a specific room and day

exports.getRoomBookingsByDay = (req, res) => {
  const { room, day } = req.query; // Extract room and day from query parameters

  if (!room || !day) {
    return res.status(400).json({ error: 'Room and day are required' });
  }

  const query = `
    SELECT DISTINCT start_time, end_time
    FROM Schedule
    WHERE room = ? AND day = ?
    ORDER BY start_time;
  `;

  db.all(query, [room, day], (err, rows) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Return the results as JSON
    res.json(rows);
  });
};
