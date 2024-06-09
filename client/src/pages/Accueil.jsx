import React, { useState, useEffect } from 'react';
import './Accueil.css';
import axios from 'axios';
import Space from '../components/Space';

export const Accueil = ({ space }) => {

    const [spaces, setSpaces] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();


    useEffect(() => {
        getSpaces();
    }, []);

    async function getSpaces() {
        var dataArray;
        try {
            setLoading(true);
            const data = (await axios.get('http://localhost:5000/spaces')).data;
            console.log(data);
            dataArray = data.spaces;
            //console.log("data array" + dataArray);
            setSpaces(dataArray);
            setLoading(false);
        } catch (error) {
            setError(true);
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    }

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                {loading ? (
                    <h1>Loading ....</h1>
                ) : error ? (
                    <h1>Error</h1>
                ) : (
                    spaces.map((space) => {
                        return <div className='col-md-9 mt-2'>
                            <Space space={space} />
                        </div>
                    }))}
            </div>
        </div>

    )
}

export default Accueil;