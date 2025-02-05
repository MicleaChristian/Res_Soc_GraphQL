import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import { Login } from "./../../components/auth/authcomponents";

const LoginPage: React.FC = () => {
  return (
    <div className="page-container flex flex-col justify-center items-center">
      <div className="logo">
        <Link to={"/"}>
          <img className="w-50" src="/assets/logo-raven.png" alt="Logo" />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-title">Login</h1>
        <Login username="" password="" />
        <Link to="/register">"No account?"</Link>
      </div>
    </div>
  );
};

export default LoginPage;
