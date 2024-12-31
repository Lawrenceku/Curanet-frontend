import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PatientRegister from "./pages/PatientRegister";
import PrescriberDashboard from './pages/PrescriberDashboard';
import PharmacistDashboard from './pages/PharmacistDashboard';

const App = () => {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<Navigate to="login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<PatientRegister />} />
            <Route path="/prescriber" element={<PrescriberDashboard />} />
            <Route path="/pharmacist" element={<PharmacistDashboard />} />
        </Routes>
    </Router>
    );
};

export default App;