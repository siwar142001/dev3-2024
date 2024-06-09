import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';

function Reserver() {
    const [todate, setTodate] = useState('');
    const [endate, setEndate] = useState('');
    const [number, setNumber] = useState('');
    const [reservation, setReservation] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const space = location.state?.space;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReservation = {todate, endate, number};

        try {
            const response = await axios.post('http://localhost:5000/reservation', newReservation);
            console.log('reservation data:' + response);

            setReservation(response.data);

            // Réinitialiser les champs après la soumission
            setTodate('');
            setEndate('')
            setNumber('');

            //navigate('/accueil');
        } catch (error) {
            console.log("Une erreur s\'est produite lors de l\'envoi des données :", error);
        }
    };

    return (
        <div>
            <h1>Réservations</h1>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ border: "1px solid black", alignContent: "flex-start", justifyContent: 'space-between',
                    padding: "50px"}}>
                    <h2>Details du Lieu</h2>
                    {space && (
                        <>
                            <p>Nom du logement : <b>{space.titre}</b></p>
                            <p>Dimension : <b>{space.dimension}m2</b></p>
                            <p>Catégorie : <b>{space.categorie}</b></p>
                            <p>Prix : <b>{space.prix}€</b></p>
                        </>
                    )}
                </div>
                <div style={{border: "1px solid black", padding: "150px"}}>
                    <form onSubmit={handleSubmit}>
                        <div id='containerReservation'>
                            <div>
                                <p>Arrivée :</p>
                                <input type="date" value={todate} onChange={(e) => setTodate(e.target.value)} required/>
                            </div>
                            <div>
                                <p>Depart :</p>
                                <input type="date" value={endate} onChange={(e) => setEndate(e.target.value)} required/>
                            </div>
                            <div>
                                <p>Nombre de personne :</p>
                                <input type="number" placeholder="0" value={number}
                                       onChange={(e) => setNumber(e.target.value)} required/>
                            </div>
                            <div>
                                <button type="submit">Réserver</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {reservation && (
                <div style={{border: "1px solid black", padding: "10px", borderRadius: "5px", textAlign: "left"}}>
                    <h2>Récapitulatif de la réservation</h2>
                    <div style={{
                            border: "1px solid black",
                            padding: "20px",
                            borderRadius: "5px",
                            backgroundColor: "lightgrey"
                        }}>
                        <p>Arrivée : {new Date(reservation.todate).toLocaleDateString()}</p>
                        <p>Départ : {new Date(reservation.endate).toLocaleDateString()}</p>
                        <p>Nombre de personnes : {reservation.number}</p>
                    </div>
                </div>
            )}
            <div id="boutonReservation">
                <form>
                    <button type="submit" formAction="./accueil">Annuler la réservation</button>
                </form>
            </div>
        </div>
    );
}

export default Reserver;