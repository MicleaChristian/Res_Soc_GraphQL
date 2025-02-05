import React from 'react';
import { PasswordReset } from './../../components/auth/authcomponents';
import './../../App.css';

const ResetPassPage: React.FC = () => {
    return (
        <div className="page-container">
            <div className="card">
                <h1 className="card-title">Reset Password</h1>
                <PasswordReset />
            </div>
        </div>
    );
};

export default ResetPassPage;