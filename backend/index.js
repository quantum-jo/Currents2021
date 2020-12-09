const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DB_connection = require('./config/db.config');

dotenv.config();
DB_connection();

const routes = require('./routes/index.router.js');
app.use(express.json());
app.use(routes);

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port: ${port}`));
