import React from 'react';
import './body.css'
import Nav from './body-components/nav';
import { Routes, Route } from "react-router-dom";
import ProfileContainer from './body-components/body-content/Profile/ProfileContainer';
import MessagesContainer from './body-components/body-content/Messages/messagesContainer';
import Music from './body-components/body-content/Music/Music';
import News from './body-components/body-content/News/News';
import Settings from './body-components/body-content/Settings/Settings';
import UsersContainer from './body-components/body-content/Users/UsersContainer';
import Login from './body-components/body-content/Login/Login';

import { initializeApp } from '../../redux/appReducer';

import { connect } from "react-redux";
import Preloader from '../common/preloader/preloader';


class Body extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <div className='body'>
                    <div className='navigation'>
                        <Nav />
                    </div>
                    <div className='content'>
                        <Routes>
                            <Route path="/Messages/*" element={<MessagesContainer />} />
                            <Route path="/Profile/:userId?" element={<ProfileContainer />} />
                            <Route path="/Profile/" element={<ProfileContainer />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/Music" element={<Music />} />
                            <Route path="/News" element={<News />} />
                            <Route path="/Users" element={<UsersContainer />} />
                            <Route path="/Settings" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            );
        }
    }
};



let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};


export default connect(mapStateToProps, { initializeApp })(Body);

