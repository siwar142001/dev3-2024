// controllers/addspace.js
const Space = require("../models/addspace");

const create_space = (req, res) => {
    const space = new Space({
        titre: req.body.titre,
        description: req.body.description,
        dimension: req.body.dimension,
        place_assise: req.body.place_assise,
        place_debout: req.body.place_debout,
        ville: req.body.ville,
        prix: req.body.prix
    });

    space.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                success: true,
                message: "l'espace a été ajouté avec succes",
                space: result
            });
        })
        .catch(err => {
            console.log(err.name);
            res.status(500).json({
                success: false,
                error: err.message,
            });
        });
}

module.exports = { create_space };
