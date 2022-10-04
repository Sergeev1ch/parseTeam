const Router = require('express');

const router = new Router();
const teamController = require('../controllers/teamController');

router.get('/getAll', teamController.getAll);

module.exports = router;