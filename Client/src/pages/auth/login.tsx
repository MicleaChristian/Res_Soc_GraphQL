import React from 'react';
import { Login } from './../../components/auth/authcomponents';
import './../../App.css';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <div className="page-container">
            <div className="card">
                <h1 className="card-title">Login</h1>
                <Login username="" password="" />
                <Link to="/register">"No account?"</Link>
            </div>

        </div>
    );
};

export default LoginPage;