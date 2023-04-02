import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Bozhena' },
  { id: 2, name: 'Sergey' },
  { id: 3, name: 'Vladislav' },
  { id: 4, name: 'Anton' },
  { id: 5, name: 'Alexandr' }
];


let messagesData = [
  {id:1, message: 'Hello'},
  {id:2, message: 'My name is Anton, and i have a fear.'},
  {id:3, message: 'Why, bro ?'}
];

let postsData = [
  { id: 1, message: 'Hello it my first pussy', likeCount: 5 },
  { id: 2, message: 'I liked your ass', likeCount: 112  }
];











const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
