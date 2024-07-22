import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Dashboard = () => {
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchUserRole = async () => {
            try {
            
                const response = await axios.get('/user/profile', {
                    withCredentials: true 
                });
                setUserRole(response.data.role);

  
                if (response.data.rol === 'admin') {
                    navigate('/admin/surveys');
                } else {
                    navigate('/surveys');
                }
            } catch (error) {
                console.error('Error fetching user role:', error);
                navigate('/login')
            }
        };

        fetchUserRole();
    }, [navigate]);

    return <div>Loading...</div>; // Puedes mostrar un spinner de carga aquí
};

export default Dashboard;
