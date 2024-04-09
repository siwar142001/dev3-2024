import React, { useState, useEffect } from 'react';
import './Accueil.css';
import axios from 'axios';

export const Accueil = ({space}) => {

  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();


  useEffect(() => {
    getSpaces();
  }, []);

  async function getSpaces() {
    try {
      setLoading(true);
      const data = (await axios.get('http://localhost:5000/spaces')).data;
      console.log(data);
      setSpaces(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error('Error fetching data:', error);
      setLoading(false)
    }
  }

  return (
    <div>
      {loading? (<h1>Loading ....</h1>) : error? (<h1>Error</h1>): (spaces.map(space => {
         return <h1>{space.titre}</h1>
      }))}
    </div>
  )
}

export default Accueil;
