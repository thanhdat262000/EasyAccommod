const express = require('express');

const apartmentsController = require('../controllers/apartments/apartmentsController');


const apartmentsRouter = express.Router();

apartmentsRouter.get('/', apartmentsController.index)


module.exports = apartmentsRouter;