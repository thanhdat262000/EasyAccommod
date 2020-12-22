const express = require('express');

const adminController = require('../controllers/admin/adminController.js');

const adminRouter = express.Router();

adminRouter.get('/allOwners', adminController.getAllOwners);

adminRouter.get('/apartments-posts', adminController.getAllApartmentPost);

adminRouter.post('/apartment-post', adminController.postApartment);

adminRouter.put('/apartments/:id', adminController.putEditApartment);

adminRouter.put('/apartments/:id/rented', adminController.putChangeRented);

adminRouter.put('/apartments/:id/cancel', adminController.putChangeCancel);

adminRouter.get('/apartments/approved', adminController.getAllApproved);

adminRouter.get('/apartments/rented', adminController.getAllRented);

adminRouter.get('/apartments/expired', adminController.getAllExpired);

adminRouter.get('/apartments/statistics', adminController.getStatistics);

adminRouter.put('/owner/approved', adminController.putChangeApproved);

adminRouter.get('/owner/pending', adminController.getOwnersPending);

adminRouter.get('/owner/approved', adminController.getOwnersApproved);

module.exports = adminRouter;