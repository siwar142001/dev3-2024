//Mettre les informations concernant la réservation
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema ( {
    todate: {
        type: Date,
        required: true,
    },
    endate: {
        type: Date,
        required: true,
    },
    number: {
        type: Number,
        required: true
    }
});

const model_reservation = mongoose.model('Reservation', reservationSchema);

module.exports = model_reservation;