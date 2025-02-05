import React, { FC } from 'react';

// Title Component
interface TitleProps {
    title: string;
    subtitle?: string;
    children?: string;
}

const Title: FC<TitleProps> = ({ title, subtitle, children }) => {
    return (
        <>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <div>{children}</div>
        </>
    );
};

// Login Component
interface LoginProps {
    username: string;
    password: string;
}

const Login: FC<LoginProps> = ({ username, password }) => {
    return (
        <div id="login-bubble">
            <Title title="Login Page" subtitle="Please enter your credentials" />
            <form>
                <input type="text" placeholder="Username" value={username} />
                <input type="password" placeholder="Password" value={password} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

// Password Reset Component
const PasswordReset: FC = () => {
    return (
        <div id="password-reset">
            <Title title="Reset Password" subtitle="Enter your email to reset your password" />
            <form>
                <input type="email" placeholder="Email" />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

// Sign In Component
const SignIn: FC = () => {
    return (
        <div id="sign-in">
            <Title title="Sign Up" subtitle="Create a new account" />
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export { Login, PasswordReset, SignIn };
