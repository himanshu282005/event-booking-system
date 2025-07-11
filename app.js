const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('../routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);
module.exports = app;
