const express = require('express');
const router = express.Router();

// Dummy data for demonstration
const events = [
  {
    id: 1,
    title: 'Independence of India',
    date: 'August 15, 1947',
    location: 'New Delhi, India',
    description: 'India gained independence from British colonial rule.',
    category: 'Political',
    significance: 'End of British Raj and start of a new era.'
  },
  // ... add more events as needed
];

// GET /api/events
router.get('/', (req, res) => {
  res.json(events);
});

module.exports = router;