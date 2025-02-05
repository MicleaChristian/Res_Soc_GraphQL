import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../App.css";

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('http://localhost:4000', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        mutation CreateUser($email: String!, $password: String!) {
                            createUser(email: $email, password: $password) {
                                code
                                message
                                success
                                user {
                                    id
                                    email
                                }
                            }
                        }
                    `,
                    variables: { email, password },
                }),
            });

            const result = await response.json();
            const data = result.data.createUser;

            if (data.success) {
                setSuccess("Account created successfully! Redirecting to login...");
                setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
            } else {
                setError(data.message || "Registration failed.");
            }
        } catch (err) {
            setError("An error occurred during registration.");
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
                <h1 className="card-title">Register</h1>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;