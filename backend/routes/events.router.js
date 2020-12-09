const router = require('express').Router();

const eventsController = require('../controllers/events.controller');

router.get('/',eventsController.findAll);

router.get('/:name',eventsController.findByName);

module.exports = router;