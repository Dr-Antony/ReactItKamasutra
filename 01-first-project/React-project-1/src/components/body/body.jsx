import React from 'react';
import './body.css'
import Nav from './body-components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './body-components/body-content/Profile/profile';
import MessagesContainer from './body-components/body-content/Messages/messagesContainer';
import Music from './body-components/body-content/Music/Music';
import News from './body-components/body-content/News/News';
import Settings from './body-components/body-content/Settings/Settings';


const Body = (props) => {
    return (
        <div className='body'>
            <Nav />
            <div className='content'>
                <Routes>
                    <Route path="/Messages/*" element={<MessagesContainer store={props.store} />} />
                    <Route path="/Profile" element={<Profile store={props.store} />} />
                    <Route path="/Music" element={<Music />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Body;