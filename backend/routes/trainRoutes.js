const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/getalltrains', trainController.getTrainSchedule);
router.get('/trains/:trainNumber', trainController.getSingleTrainData);

module.exports = router;
