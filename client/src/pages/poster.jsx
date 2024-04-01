import React, { useState } from 'react';
import axios from 'axios'; // Importez Axios
import './poster.css';

function Poster({ onSubmit }) {
   // Définir les états des champs du formulaire
   const [titre, setTitre] = useState('');
   const [description, setDescription] = useState('');
   const [dimension, setDimension] = useState('');
   const [place_assise, setplace_assise] = useState('');
   const [place_debout, setplace_debout] = useState('');
   const [ville, setVille] = useState('');
   const [prix, setPrix] = useState('');

   // Fonction pour gérer la soumission du formulaire
   const submit = async (e) => {
       e.preventDefault();

       try {
           // Envoie des données du formulaire à l'API Node.js
           const response = await axios.post('http://localhost:5000/spaces', {
               titre,
               description,
               dimension: parseFloat(dimension),
               place_assise: parseInt(place_assise),
               place_debout: parseInt(place_debout),
               ville,
               prix: parseFloat(prix)
           });

           // Affichage de la réponse de l'API dans la console
           console.log(response.data);

           // Réinitialisation des champs du formulaire après la soumission
           setTitre('');
           setDescription('');
           setDimension('');
           setplace_assise('');
           setplace_debout('');
           setVille('');
           setPrix('');
       } catch (error) {
           // Gestion des erreurs
           console.error('Une erreur s\'est produite lors de l\'envoi des données :', error);
       }
   };
    return (
        <form onSubmit={submit} >
            <div className='form-row'>
                <div className='form-group1'>
                    <label>Titre:</label>
                    <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required />
                    <label>Description:</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />

                    <label>Dimension:</label>
                    <input type="text" value={dimension} onChange={(e) => setDimension(e.target.value)} required />
                </div>

                <div className='form-group2'>
                    

                </div>
               
                <div className='form-group3'>
                    <label>Place assise:</label>
                    <input type="text" value={place_assise} onChange={(e) => setplace_assise(e.target.value)} required />

                    <label>Place debout:</label>
                    <input type="text" value={place_debout} onChange={(e) => setplace_debout(e.target.value)} required />
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
