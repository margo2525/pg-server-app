const { Router } = require('express');
const { phonesController } = require('../controllers');
const { paginate } = require('../middleware');

const phonesRouter = Router();

phonesRouter.route('/').get(paginate.paginatePhone, phonesController.getPhones);

module.exports = phonesRouter;
