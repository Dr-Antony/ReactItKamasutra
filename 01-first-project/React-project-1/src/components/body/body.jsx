import React from 'react';
import './body.css'
import Nav from './body-components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './body-components/body-content/Profile/profile';
import Messages from './body-components/body-content/Messages/Messages';
import Music from './body-components/body-content/Music/Music';
import News from './body-components/body-content/News/News';
import Settings from './body-components/body-content/Settings/Settings';


const Body = (props) => {
    return (
        <div className='body'>
            <Nav />
            <div className='content'>
                <Routes>
                    <Route path="/Messages" element={<Messages dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData} />} />
                    <Route path="/profile" element={<Profile postsData={props.state.profilePage.postsData} />} />
                    <Route path="/Music" element={<Music />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Body;