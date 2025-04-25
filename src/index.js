import ReactDOM from 'react-dom/client';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);