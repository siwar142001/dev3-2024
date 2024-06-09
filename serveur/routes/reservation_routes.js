//La route de l'API reservation
const express = require('express');
const router = express.Router();
const Reservation= require('../models/reservation_model')
const reservationController = require("../controllers/reservation_controller");

router.post("/reservation", reservationController.createReservation);



module.exports = router;