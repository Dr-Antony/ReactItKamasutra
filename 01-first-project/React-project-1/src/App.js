import React from 'react';
import './App.css';
import './reset.css'
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";






const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <Body dialogsData={props.dialogsData} messagesData={props.messagesData} postsData={props.postsData} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
