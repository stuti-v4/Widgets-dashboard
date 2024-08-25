import React from 'react';
import ReactDOM from 'react-dom/client';

import Dashboard from "./components/Dashboard";

import './app.scss';

const App = () => (
    <Dashboard />
);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);
