import React from 'react';
import './App.css';
import './reset.css'


const App = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <header className='header'>
          <div className='header__logo'>
            <img src='https://www.unipile.com/wp-content/uploads/2022/06/logo-facebook-noir.png' />
          </div>
          <div className='header__nav'>
            <div className='header__nav-btn'>
              <div className='nav__button'><a className='nba' href='#'>Menu</a></div>
              <div className='nav__button'><a className='nba' href='#'>Account</a></div>
            </div>
          </div>
        </header>
        <div className='main'>
          <div className='container'>
            <div className='main__nav'>
              <div className='main__nav-btn'>
                <a href='#'>Profile</a>
              </div>
              <div className='main__nav-btn'>
                <a href='#'>Massages</a>
              </div>
              <div className='main__nav-btn'>
                <a href='#'>News</a>
              </div>
              <div className='main__nav-btn'>
                <a href='#'>Music</a>
              </div>
              <div className='main__nav-btn'>
                <a href='#'>Settings</a>
              </div>
            </div>
            <div className='main__content'>
              <div className='content__img'>
                <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' />
              </div>
              <div className='content__user-info'>
                <div className='content__user-photo'>
                  <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80' />
                </div>
                <div className='content__user-inf'>
                  <div className='user__ns'></div>
                  <div className='user__inf'>
                    <ul className='user__inf-ul'>
                      <li className='user__inf-li'></li>
                      <li className='user__inf-li'></li>
                      <li className='user__inf-li'></li>
                      <li className='user__inf-li'></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='content__posts'>
                <div className='content__posts-head'>
                </div>
                <div className='content__posts-input'>
                </div>
                <div className='content__posts-button'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
