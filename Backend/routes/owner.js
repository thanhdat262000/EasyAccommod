const express = require('express');

const ownerController = require('../controllers/owner/ownerController');
const { authUser, authRole } = require('../middlewares/authMiddleWare');

const { ROLE } = require('../role');

const ownerRouter = express.Router();

ownerRouter.get('/apartments/pending', authUser, authRole(ROLE.OWNER), ownerController.getAllPending)

ownerRouter.get('/apartments/approved', authUser, authRole(ROLE.OWNER), ownerController.getAllApproved)

ownerRouter.get('/apartments/rented', authUser, authRole(ROLE.OWNER), ownerController.getAllRented)

ownerRouter.get('/apartments/expired', authUser, authRole(ROLE.OWNER), ownerController.getAllExpired)

module.exports = ownerRouter;