import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import LoginPage from './pages/auth/login';
import ResetPassPage from './pages/auth/resetpass';
import RegisterPage from './pages/auth/register';
import Posts from './pages/post.tsx';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/reset" element={<ResetPassPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/:id" element={<Posts />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);