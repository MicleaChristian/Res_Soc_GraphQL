import React, { useState } from "react";
import { useAuth } from "@components/auth/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // For navigation

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize navigation hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      if (!result.data || !result.data.signIn) {
        setError("Unexpected response from server");
        return;
      }

      const { success, message, token } = result.data.signIn;

      if (success) {
        login(token);
      } else {
        setError(message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  const handleNoAccount = () => {
    navigate("/register"); // Navigate to the registration page
  };

  return (
    <div className="page-container flex flex-col justify-center items-center">
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
        <a
          href="/register"
          className="no-account-link"
          onClick={(e) => {
            e.preventDefault();
            handleNoAccount();
          }}
        >
          No Account? Register Here
        </a>
      </div>
    </div>
  );
};

export default LoginPage;