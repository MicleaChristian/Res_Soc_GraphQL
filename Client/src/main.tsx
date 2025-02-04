import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import CharacterPage from './CharacterPage.tsx';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<CharacterPage />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
