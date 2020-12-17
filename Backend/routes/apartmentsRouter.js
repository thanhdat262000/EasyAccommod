const express = require('express');

const apartmentsController = require('../controllers/apartments/apartmentsController');
const { authUser, authRole } = require('../middlewares/authMiddleware');
const { ROLE } = require('../role');

const apartmentsRouter = express.Router();

apartmentsRouter.get('/', apartmentsController.index)

apartmentsRouter.get('/favorite', authUser, apartmentsController.getAllFavorite)

module.exports = apartmentsRouter;