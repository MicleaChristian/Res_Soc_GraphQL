import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        mutation SignIn($email: String!, $password: String!) {
                            signIn(email: $email, password: $password) {
                                code
                                message
                                success
                                token
                            }
                        }
                    `,
                    variables: { email, password },
                }),
            });

            const result = await response.json();
            const data = result.data.signIn;

            if (data.success) {
                localStorage.setItem('token', data.token); // Store JWT
                navigate('/'); // Redirect on success
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    return (
        <div className="page-container flex flex-col justify-center items-center">
            <div className="logo">
                <Link to="/">
                    <img className="w-50" src="/assets/logo-raven.png" alt="Logo" />
                </Link>
            </div>
            <div className="card">
                <h1 className="card-title">Login</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <a href="/register">No account? Register here</a>
            </div>
        </div>
    );
};

export default LoginPage;