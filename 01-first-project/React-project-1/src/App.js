import React from 'react';
import './App.css';
import './reset.css'
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import HeaderContainer from './components/header/headerContainer';


const App = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <HeaderContainer />
        <Body />
        <Footer />
      </div>
    </div>
  );
};


const MainApp = (props)=> {
  return (
    <div className='wrapper'>
      <div className='container'>
        <HeaderContainer />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;



















