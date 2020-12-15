const express = require('express');

const apartmentsController = require('../controllers/apartmentsController');


const apartmentsRouter = express.Router();

apartmentsRouter.get('/', apartmentsController.index)


module.exports = apartmentsRouter;