const Router = require('express');

const router = new Router();

const teamRouter = require('./teamRouter');

router.use('/', teamRouter);

module.exports = router;