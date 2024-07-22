import React, { useState } from 'react';
import axios from 'axios';

const CreateSurvey = () => {
    const [surveyData, setSurveyData] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        poblationalProfile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData({ ...surveyData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/surveys', surveyData);
            console.log('Survey created:', response.data);
        } catch (error) {
            console.error('Error creating survey:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1>Create Survey</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={surveyData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={surveyData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Start Date</label>
                    <input type="date" name="startDate" value={surveyData.startDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>End Date</label>
                    <input type="date" name="endDate" value={surveyData.endDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Poblational Profile</label>
                    <input type="text" name="poblationalProfile" value={surveyData.poblationalProfile} onChange={handleChange} />
                </div>
                <button type="submit">Create Survey</button>
            </form>
        </div>
    );
};

export default CreateSurvey;
