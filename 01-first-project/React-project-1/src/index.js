import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import { addMessage } from './redux/state';
import { updateTextPost } from './redux/state';
import { subscribe } from './redux/state';


export let Render = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} updateTextPost={updateTextPost} addPost={addPost} addMessage={addMessage} />
        </React.StrictMode>
    );
};

Render(state);

subscribe(Render);