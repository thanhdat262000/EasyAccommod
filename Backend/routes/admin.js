const express = require('express');

const adminController = require('../controllers/admin/adminController.js');
const { authUser, authRole } = require('../middlewares/authMiddleWare');

const { ROLE } = require('../role');

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

module.exports = adminRouter;