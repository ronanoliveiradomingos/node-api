const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/user', UserController.get);
// routes.post('/user', UserController.get);
// routes.put('/user', UserController.get);
// routes.delete('/user', UserController.get);

module.exports = routes;