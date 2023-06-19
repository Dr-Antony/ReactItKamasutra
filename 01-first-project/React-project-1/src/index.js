import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './App';
import store from './redux/reduxStore.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MainApp />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


