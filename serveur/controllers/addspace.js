const Space = require("../models/addspace");

const create_space = async(req, res) => {

    console.log("bonjour");

    // vérifier si tous les champs sont remplis


    const space = new Space({
        titre: req.body.titre,
        description: req.body.description,
        dimension: req.body.dimension,
        place_assise: req.body.place_assise,
        place_debout: req.body.place_debout,
        ville: req.body.ville,
        prix: req.body.prix,
        //imageUrl: req.body.imageUrl



    });

    // on enregistre l'espace 
    space
        .save()
        .then(result => {
            console.log(result);
            res
                .status(201)
                .json({
                    success: true,
                    message: "l'espace a été ajouté avec succes",
                    space: {
                        spaceId: result._id,
                        titre: result.titre,
                        description: result.description,
                        dimension: result.dimension,
                        place_assise: result.place_assise,
                        place_debout: result.place_debout,
                        ville: result.ville,
                        prix: result.prix,
                        // imageUrl: result.imageUrl

                    }
                });
        })

        // s'il y a une erreur dans la fonction save, on envoie status 500
        .catch(err => {
            console.log(err.name);
            console.log(err)

            res.status(500).json({
                success: false,
                error: err.message,
            });
        });
}


module.exports = { create_space };