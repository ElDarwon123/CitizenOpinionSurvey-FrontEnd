import React, { useState, useEffect } from 'react';
import sondeoService from '../services/surveyService';
import SondeoForm from './SurveyForm';

const AdminDashboard = () => {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const fetchSurveys = async () => {
            const response = await sondeoService.getSondeos();
            setSurveys(response.data);
        };
        fetchSurveys();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <SondeoForm />
            <h3>Surveys</h3>
            <ul>
                {surveys.map((survey) => (
                    <li key={survey._id}>{survey.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
