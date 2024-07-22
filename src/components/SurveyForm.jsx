import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SondeoList = () => {
    const [sondeos, setSondeos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSondeos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/surveys');
                if (Array.isArray(response.data)) {
                    setSondeos(response.data);
                } else {
                    setError('Unexpected response format');
                }
            } catch (error) {
                setError('Error fetching sondeos: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSondeos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Lista de Sondeos</h2>
            <ul>
                {Array.isArray(sondeos) && sondeos.length > 0 ? (
                    sondeos.map(sondeo => (
                        <li key={sondeo._id}>
                            <h3>{sondeo.title}</h3>
                            <p>{sondeo.description}</p>
                        </li>
                    ))
                ) : (
                    <li>No hay sondeos disponibles</li>
                )}
            </ul>
        </div>
    );
};

export default SondeoList;
