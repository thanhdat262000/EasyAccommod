const express = require('express');

const ownerController = require('../controllers/owner/ownerController');
const { authUser, authRole } = require('../middlewares/authMiddleWare');

const { ROLE } = require('../role');

const ownerRouter = express.Router();

ownerRouter.get('/apartments/pending', authUser, authRole(ROLE.OWNER), ownerController.getAllPending)

module.exports = ownerRouter;