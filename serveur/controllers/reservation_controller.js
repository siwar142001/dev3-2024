//Celui qui s'occupe du controle
const Reservation = require('../models/reservation_model');

exports.createReservation = async (req, res) => {
    const { todate, endate, number} = req.body;

    if (!todate || !endate || !number) {
        return res
            .status(400)
            .json({
                success: false,
                message: "tous les champs sont obligatoire"
            });
    }

    try {
        const newReservation = new Reservation({
            todate,
            endate,
            number
        });
        const savedReservation = await newReservation.save();

        res
            .status(201)
            .json(savedReservation);
    } catch (error) {
        res
            .status(500)
            .json({
                error: 'Une erreur s\'est produite lors de la création de la réservation.'
            });
    }
};