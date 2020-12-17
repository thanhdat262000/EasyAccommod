const express = require('express');
const apartmentController = require('../controllers/apartment/apartmentController');
const { ROLE } = require('../role');
const { authUser, authRole } = require('../middlewares/authMiddleware');

const apartmentRouter = express.Router();


apartmentRouter.get('/', apartmentController.index)

apartmentRouter.get('/:id', apartmentController.renderId)

apartmentRouter.post('/:id/favorite', authUser, authRole(ROLE.USER), apartmentController.favorite)

apartmentRouter.post('/:id/comment', authUser, authRole(ROLE.USER), apartmentController.comment)

apartmentRouter.post('/:id/report', authUser, authRole(ROLE.USER), apartmentController.report)

module.exports = apartmentRouter;