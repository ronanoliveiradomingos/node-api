"use strict";

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser  = require("body-parser");

const database = require('./config/database');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

//Connection database
database.connectDB();

app.use("port", process.env.PORT || 3333);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

server.listen(app.get("port"));