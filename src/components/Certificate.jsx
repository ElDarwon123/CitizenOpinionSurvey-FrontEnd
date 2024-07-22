import React from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';

const Certificate = ({ userId, surveyId }) => {
    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/certificates/generate/${userId}/${surveyId}`, {
                responseType: 'blob'
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            FileSaver.saveAs(blob, `certificate-${userId}-${surveyId}.pdf`);
        } catch (error) {
            console.error('Error generating certificate', error);
        }
    };

    return (
        <button onClick={handleDownload}>Download Certificate</button>
    );
};

export default Certificate;
