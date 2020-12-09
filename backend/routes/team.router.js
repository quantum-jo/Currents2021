const router = require('express').Router();

//Importing Controllers
const teamController = require('../controllers/team.controller');

//Return a list of core team members
router.get('/', teamController.findAll);

module.exports = router;