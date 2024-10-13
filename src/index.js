import React from 'react';
import { createRoot } from 'react-dom/client'

const Application = () => {
    return (
        <h1>Resume</h1>
    );
}

createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);

