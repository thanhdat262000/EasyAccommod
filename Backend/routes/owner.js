const express = require('express');

const ownerController = require('../controllers/ownerController')

const ownerRouter = express.Router();

ownerRouter.get('/', ownerController.index)

ownerRouter.get('/apartments/queue', ownerController.apartmentsQueue)

module.exports = ownerRouter;