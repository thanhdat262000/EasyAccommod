const express = require('express');

const ownerController = require('../controllers/owner/ownerController');
const { authUser, authRole } = require('../middlewares/authMiddleWare');

const { ROLE } = require('../role');

const ownerRouter = express.Router();

ownerRouter.get('/', authUser, authRole(ROLE.OWNER),ownerController.index)

ownerRouter.get('/apartments/queue', authUser, authRole(ROLE.OWNER),ownerController.apartmentsQueue)

module.exports = ownerRouter;