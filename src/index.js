import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PrimeReactProvider } from 'primereact/api';
import { PokemonContextProvider } from './context/PokemonContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <PrimeReactProvider>
      <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
    </PrimeReactProvider>
  // </React.StrictMode>
);
