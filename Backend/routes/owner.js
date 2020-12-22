const express = require('express');

const ownerController = require('../controllers/owner/ownerController');

const ownerRouter = express.Router();

ownerRouter.get('/pending', ownerController.getAllPending)

ownerRouter.get('/approved', ownerController.getAllApproved)

ownerRouter.get('/rented', ownerController.getAllRented)

ownerRouter.get('/expired', ownerController.getAllExpired)

ownerRouter.get('/disapproved', ownerController.getAllDisapproved);

ownerRouter.post('/post', ownerController.postApartment)

ownerRouter.put('/:id', ownerController.putEditApartment)

ownerRouter.put('/:id/rented', ownerController.putChangeRented);

ownerRouter.put('/:id/cancel', ownerController.putChangeCancel);

module.exports = ownerRouter;