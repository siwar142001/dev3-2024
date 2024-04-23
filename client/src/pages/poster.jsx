import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importez Axios
//import './poster.css';

function Poster({ onSubmit }) {
    // Définir les états des champs du formulaire
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [proprietaire, setProprietaire] = useState('');
    const [dimension, setDimension] = useState('');
    const [cathegorie, setCathegorie] = useState('');
    const [place_assise, setplace_assise] = useState('');
    const [place_debout, setplace_debout] = useState('');
    const [ville, setVille] = useState('');
    const [prix, setPrix] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cities, setCities] = useState([]);

    // Effectuer une requête HTTP GET pour récupérer la liste des villes

    useEffect(() => {
        fetchCities();
    }, []);
    async function fetchCities() {
        var dataArray;
        try {
            const data = (await axios.get('http://localhost:5000/cities')).data;
            //console.log(response)
            dataArray = data.cities;
            setCities(dataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoie des données du formulaire à l'API Node.js
            const response = await axios.post('http://localhost:5000/spaces', {
                titre,
                description,
                proprietaire,
                dimension: parseFloat(dimension),
                cathegorie,
                place_assise: parseInt(place_assise),
                place_debout: parseInt(place_debout),
                ville,
                prix: parseFloat(prix),
                imageUrl
            });

            // Affichage de la réponse de l'API dans la console
            console.log(response.data);

            // Réinitialisation des champs du formulaire après la soumission
            setTitre('');
            setDescription('');
            setProprietaire('');
            setDimension('');
            //setCathegorie('');
            setplace_assise('');
            setplace_debout('');
            setVille('');
            setPrix('');
            setImageUrl('');
            // Appel de la fonction onSubmit si elle est fournie
            if (onSubmit) onSubmit();
        } catch (error) {
            // Gestion des erreurs
            console.error('Une erreur s\'est produite lors de l\'envoi des données :', error);
        }
    };
    return (
        <form className="row g-3" id='form' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Titre</label>
                <input type="text" className="form-control" id="inputEmail4" value={titre} onChange={(e) => setTitre(e.target.value)} required minLength={4} maxLength={15} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Description</label>
                <input type="text" className="form-control" id="inputPassword4" value={description} onChange={(e) => setDescription(e.target.value)} required maxLength={250} />
            </div>
            <div className="col-6">
                <label htmlFor="inputAddress" className="form-label">Propietaire</label>
                <input type="text" className="form-control" id="inputAddress" value={proprietaire} onChange={(e) => setProprietaire(e.target.value)} required minLength={4} maxLength={15} />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Dimension</label>
                <input type="text" className="form-control" id="inputCity" value={dimension} onChange={(e) => setDimension(e.target.value)} required onKeyDown={(e) => {
                    if (isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                        e.preventDefault();
                    }
                }} />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Cathéhgorie</label>
                <select id="inputState" className="form-select" value={cathegorie} onChange={(e) => setCathegorie(e.target.value)} required >
                    <option value="Terrasse">Térrasse</option>
                    <option value="Piscine">Piscine</option>
                    <option value="Jardin">Jardin</option>
                    <option value="Salle">Salle</option>
                </select>

            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Place assise</label>
                <input type="text" className="form-control" id="inputZip" value={place_assise} onChange={(e) => setplace_assise(e.target.value)} required onKeyDown={(e) => {
                    if (isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                        e.preventDefault();
                    }
                }} />
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Place debout</label>
                <input type="text" className="form-control" id="inputZip" value={place_debout} onChange={(e) => setplace_debout(e.target.value)} required onKeyDown={(e) => {
                    if (isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                        e.preventDefault();
                    }
                }} />
            </div>
            <div className="col-md-2">
                <label htmlFor="inputCity" className="form-label">Ville</label>
                <select id="inputCity" className="form-select" value={ville} onChange={(e) => setVille(e.target.value)} required>
                    <option value="">Sélectionner une ville</option>
                    {cities.map(city => (
                        <option key={city.city} value={city.city}>{city.city}</option>
                    ))}
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Prix</label>
                <input type="text" className="form-control" id="inputZip" value={prix} onChange={(e) => setPrix(e.target.value)} required onKeyDown={(e) => {
                    if (isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                        e.preventDefault();
                    }
                }} />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Images url</label>
                <input type="text" className="form-control" id="inputAddress" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
            </div><br /><br /><br /><br /><br /><br /><br />

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Poster</button>
            </div>
            <br /><br /><br /><br />
        </form>
    );
}

export default Poster;
