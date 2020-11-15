const express = require('express');

const ownerController = require('../controllers/ownerController')

const ownerRouter = express.Router();

ownerRouter.get('/', ownerController.index)


module.exports = ownerRouter;