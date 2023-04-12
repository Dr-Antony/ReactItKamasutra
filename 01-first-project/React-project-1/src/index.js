import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';



export let Render = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} updateTextPost={store.updateTextPost.bind(store)} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} />
        </React.StrictMode>
    );
};

Render(store.getState());

store.subscribe(Render);