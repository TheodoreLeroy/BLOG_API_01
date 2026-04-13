import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Blog from './pages/Blog';
import UserManager from './pages/admin/UserManager';
import ErrorPage from '@pages/error/ErrorPage';
import ProtectedRoute from './services/protectedRoute';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="/error" element={<ErrorPage errorLog="shit" />} />

                {/* Restricted area */ }
                <Route path="/dashboard"
                    element={
                        <ProtectedRoute requiredRole='admin'>
                            <Dashboard />
                        </ProtectedRoute>
                        } />
                

                <Route path="/usermanager"
                    element={
                        <ProtectedRoute requiredRole='admin'>
                            <UserManager />
                        </ProtectedRoute>
                        } />
                

                {/*<Route path="*" element={<Navigate to="/login" />} />*/}
            </Routes>
        </>
    );
}

export default App
