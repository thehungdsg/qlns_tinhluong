const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const chiNhanhRoute = require('./routes/chi_nhanhRoute');

app.use('/api', chiNhanhRoute);

const taiKhoanRoute = require('./routes/tai_khoanRoute');

app.use('/api', taiKhoanRoute);

module.exports = app;