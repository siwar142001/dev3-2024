import React, { useState } from 'react';
import './poster.css'

function Poster({ onSubmit }) {

    // Créer des états pour les champs du formulaire avec le hook usestate
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [dimension, setDimension] = useState('');
    const [placeAssise, setPlaceAssise] = useState('');
    const [placeDebout, setPlaceDebout] = useState('');
    const [ville, setVille] = useState('');
    const [prix, setPrix] = useState('');

    //gérer la soumission du formulaire
    const submit = (e) => {
        e.preventDefault();

        // envoie les données du formulaire à la fonction onSubmit fournie
        onSubmit({
            titre,
            description,
            dimension: parseFloat(dimension), // Convertir la dimension en nombre
            placeAssise: parseInt(placeAssise), // Convertir les places assises en nombre entier
            placeDebout: parseInt(placeDebout), // Convertir les places debout en nombre entier
            ville,
            prix: parseFloat(prix) // Convertir le prix en nombre
        });
        // réinitialise les champs du formulaire après la soumission
        setTitre('');
        setDescription('');
        setDimension('');
        setPlaceAssise('');
        setPlaceDebout('');
        setVille('');
        setPrix('');
    };

    return (
        <form onSubmit={submit} >
            <div className='form-row'>
                <div className='form-group1'>
                    <label>Titre:</label>
                    <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required />

                    <label>Dimension:</label>
                    <input type="text" value={dimension} onChange={(e) => setDimension(e.target.value)} required />
                </div>

                <div className='form-group2'>
                    <label>Description:</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />

                </div>
               
                <div className='form-group3'>
                    <label>Place assise:</label>
                    <input type="text" value={placeAssise} onChange={(e) => setPlaceAssise(e.target.value)} required />

                    <label>Place debout:</label>
                    <input type="text" value={placeDebout} onChange={(e) => setPlaceDebout(e.target.value)} required />
                </div>

                
                <div className='form-group4'>
                    <label>Ville:</label>
                    <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} required />

                    <label>Prix:</label>
                    <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} required />
                </div>
                
                <button className='button' type="submit">Poster</button>
            </div>
        </form>
    );
}

export default Poster;
