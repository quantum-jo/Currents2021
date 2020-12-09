const express = require("express");
const router = express.Router();

//Importing controllers
const workshopsController = require("../controllers/workshops.controller");

//Return a list of workshops
router.get('/workshops', workshopsController.findAll);

//Return details of specific workshop
router.get('/workshops/:title', workshopsController.findOne);

module.exports = router;