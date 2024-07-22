import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AdminSurveys from './components/AdminDashboard';
import UserSurveys from './components/CitizenDashboard';
import Login from './components/Login';

const App = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/surveys" element={<AdminSurveys />} />
            <Route path="/surveys" element={<UserSurveys />} />
            <Route path="/" element={<Login />} />
        </Routes>
    </Router>
);

export default App;
