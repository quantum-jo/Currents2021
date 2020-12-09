const router = require('express').Router();

//Importing Controllers
const ccaController = require('../controllers/cca.controller');

router.post('/', ccaController.apply);

module.exports = router;