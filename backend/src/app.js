const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

module.exports = app;