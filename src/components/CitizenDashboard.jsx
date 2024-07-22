import React, { useState, useEffect } from 'react';
import sondeoService from '../services/surveyService';
import Certificate from './Certificate';

const CitizenDashboard = () => {
    const [sondeos, setSondeos] = useState([]);
    const [useraId, setUserId] = useState('')

    useEffect(() => {
        const fetchSondeos = async () => {
            const response = await sondeoService.getSondeos();
            setSondeos(response.data);
        };
        fetchSondeos();
    }, []);

    const userId = '667b881983374dac728c4195';

    return (
        <div>
            <h2>Available Sondeos</h2>
            <ul>
                {sondeos.map(sondeo => (
                    <li key={sondeo._id}>
                        {sondeo.titulo}
                        <Certificate userId={userId} surveyId={sondeo._id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CitizenDashboard;
