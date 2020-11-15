const express = require('express')

const signinController = require('../controllers/signin');

const signinRouter = express.Router();

signinRouter.post('/', signinController.signinPost)

module.exports = signinRouter