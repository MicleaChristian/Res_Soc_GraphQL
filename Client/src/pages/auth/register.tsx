import React from 'react';
import { SignIn } from './../../components/auth/authcomponents';
import './../../App.css';

const RegisterPage: React.FC = () => {
    return (
        <div className="page-container">
            <div className="card">
                <h1 className="card-title">Register</h1>
                <SignIn />
            </div>
        </div>
    );
};

export default RegisterPage;