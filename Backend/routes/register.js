const express = require('express');

const registerController = require('../controllers/register');
const { checkExistEmail } = require('../middlewares/checkExistEmail');
const {checkEmail} = require('../controllers/checkEmailRegister');

const registerRouter = express.Router();

registerRouter.post('/', checkExistEmail,registerController.register);

registerRouter.post('/checkEmail', checkEmail)

module.exports = registerRouter