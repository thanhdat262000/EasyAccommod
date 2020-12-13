const express = require('express');

const registerController = require('../controllers/register');
const { checkExistEmail } = require('../middlewares/checkExistEmail');

const registerRouter = express.Router();

registerRouter.post('/', checkExistEmail,registerController.register);

module.exports = registerRouter