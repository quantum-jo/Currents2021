const router = require('express').Router();

const tronicalController = require("../controllers/tronicals.controller");

//Return a list of all tronicals
router.get('/tronicals',tronicalController.findAll);

//Return the details of a tronical
router.get('/tronicals/:title',tronicalController.findOne);

module.exports = router;
