import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import axios from 'axios';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register/> } />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    );
}

export default App
