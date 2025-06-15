const express = require('express');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

const eventsRouter = require('./routes/events'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route for historical events
app.use('/api/events', eventsRouter);
app.use('/audios', express.static(path.join(__dirname, 'public/audios')));

// Root route
app.get('/', (req, res) => {
  res.send('Kaal-Chakra Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});