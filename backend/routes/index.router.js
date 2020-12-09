const router = require('express').Router();

//Importing middlewares
// const middleware = require('../middlewares/middleware');

//Importing routers
const eventsRouter = require('./events.router');
const workshopsRouter = require('./workshops.router');
const tronicalsRouter = require('./tronicals.router');
const srRouter = require('./sr.router');
const teamRouter = require('./team.router');
const ccaRouter = require('./cca.router');
// const eurekaRouter = require('./eureka.router');
const certificateAuth = require('./certificateAuth.router');

//Setting up routers
router.use('/events', eventsRouter);
router.use('/workshops', workshopsRouter);
router.use('/tronicals', tronicalsRouter);
router.use('/sr', srRouter);
router.use('/team', teamRouter);
router.use('/cca/apply', ccaRouter);
// router.use('/eureka/apply', eurekaRouter);
router.use('/authenticate', certificateAuth);

module.exports = router;