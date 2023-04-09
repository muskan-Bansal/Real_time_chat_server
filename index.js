const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('hi');
});

app.post('/', (req, res) => {
  const {} = req.body;
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
