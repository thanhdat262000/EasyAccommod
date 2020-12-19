const express = require('express');

const ownerController = require('../controllers/owner/ownerController');

const ownerRouter = express.Router();

ownerRouter.get('/pending', ownerController.getAllPending)

ownerRouter.get('/approved', ownerController.getAllApproved)

ownerRouter.get('/rented', ownerController.getAllRented)

ownerRouter.get('/expired', ownerController.getAllExpired)

module.exports = ownerRouter;