import './App.css'
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import axios from 'axios';
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/> } />

                <Route path='/Login' element={<Login />} />

                <Route path='/Dashboard' element={<Dashboard />} />

                <Route path='/Blog' element={<Blog /> } />
                <Route path='*' element={<Login/> } />
            </Routes>
            
        </>
    );
}

export default App
