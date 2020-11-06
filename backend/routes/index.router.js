const router = require('express').Router();

//Importing routers
const eventsRouter = require('./events.router');
const workshopsRouter = require('./workshops.router');
const tronicalsRouter = require('./tronicals.router');
const srRouter = require('./sr.router');
const teamRouter = reqire('./team.router');

//Setting up routers
router.use('/events', eventsRouter);
router.use('/workshops', workshopsRouter);
router.use('/tronicals', tronicalsRouter);
router.use('/sr', srRouter);
router.use('/team', teamRouter);

module.exports = router;