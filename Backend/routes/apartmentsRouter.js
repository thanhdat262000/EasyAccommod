const express = require('express');

const apartmentsController = require('../controllers/apartmentsController');


const apartmentsRouter = express.Router();

apartmentsRouter.get('/', apartmentsController.index)

apartmentsRouter.get('/page/:id', apartmentsController.pagination)


module.exports = apartmentsRouter;