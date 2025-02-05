import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import { SignIn } from "./../../components/auth/authcomponents";

const RegisterPage: React.FC = () => {
  return (
    <div className="page-container flex flex-col justify-center items-center">
      <div className="logo">
        <Link to={"/"}>
          <img className="w-50" src="/assets/logo-raven.png" alt="Logo" />
        </Link>
      </div>
      <div className="card">
        <h1 className="card-title">Register</h1>
        <SignIn />
      </div>
    </div>
  );
};

export default RegisterPage;
