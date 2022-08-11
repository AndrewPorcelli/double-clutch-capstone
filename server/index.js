// require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const SERVER_PORT  = process.env.SERVER_PORT || 3001;
const { getReviews } = require('./controller.js');

app.use(express.json());
app.use(cors());

//Setup GET API for now
app.get('/api/home', getReviews);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));
