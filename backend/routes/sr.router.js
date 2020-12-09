const router = require('express').Router();
const srController = require('../controllers/sr.controller');

router.get('/', srController.findAll);
router.get('/:name', srController.findByName);

module.exports = router;