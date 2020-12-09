const router = require('express').Router();

const certificateAuthController = require('../controllers/certificateAuth.controller');

router.get('/', certificateAuthController.authenticate);

// router.post('/certificate', certificateAuthController.addCertificate);

module.exports = router;