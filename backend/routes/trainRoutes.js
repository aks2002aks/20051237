const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/', trainController.getTrainSchedule);

module.exports = router;