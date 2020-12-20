const express = require('express');

const adminController = require('../controllers/admin/adminController.js');
const { authUser, authRole } = require('../middlewares/authMiddleWare');

const { ROLE } = require('../role');

const adminRouter = express.Router();

adminRouter.get('/', authUser, authRole(ROLE.ADMIN),adminController.index)

adminRouter.get('/allOwners', authUser, authRole(ROLE.ADMIN), adminController.getAllOwners);

adminRouter.get('/apartments-posts', adminController.getAllApartmentPost);

module.exports = adminRouter;