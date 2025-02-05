import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Application</h1>
            <p>Please navigate to one of the following options:</p>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/login/register">Register</Link>
                </li>
                <li>
                    <Link to="/login/reset">Reset Password</Link>
                </li>
            </ul>
        </div>
    );
};

export default App;