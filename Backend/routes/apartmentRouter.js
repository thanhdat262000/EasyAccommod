const express = require('express');

const apartmentController = require('../controllers/apartmentController');

const apartmentRouter = express.Router();


apartmentRouter.get('/', apartmentController.index)

apartmentRouter.get('/:id', apartmentController.renderId)

apartmentRouter.post('/:id/favorite', apartmentController.favorite)

apartmentRouter.post('/:id/comment', apartmentController.comment)

apartmentRouter.post('/:id/report', apartmentController.report)

module.exports = apartmentRouter;