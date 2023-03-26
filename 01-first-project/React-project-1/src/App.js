import React from 'react';
import './App.css';
import './reset.css'
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
const App = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
