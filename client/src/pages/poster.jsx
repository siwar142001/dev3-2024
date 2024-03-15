import React, { useState } from 'react';

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
    <form onSubmit={submit}>
      <div>
        <label>Titre:</label>
        <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Dimension:</label>
        <input type="text" value={dimension} onChange={(e) => setDimension(e.target.value)} required />
      </div>
      <div>
        <label>Place assise:</label>
        <input type="text" value={placeAssise} onChange={(e) => setPlaceAssise(e.target.value)} required />
      </div>
      <div>
        <label>Place debout:</label>
        <input type="text" value={placeDebout} onChange={(e) => setPlaceDebout(e.target.value)} required />
      </div>
      <div>
        <label>Ville:</label>
        <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} required />
      </div>
      <div>
        <label>Prix:</label>
        <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} required />
      </div>
      <button type="submit">Poster</button>
    </form>
  );
}

export default Poster;
