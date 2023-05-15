import React from "react";
import Profile from './profile.jsx';
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from './../../../../../redux/profileReducer';

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

let  withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}
//Это маршпутизация, очень важно! Используй для создания интерфейса в Messages







class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId;
        if(!userId){userId=28998;}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        return (
            <Profile profile={this.props.profile} {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile ,
        isAuth: state.auth.isAuth
    };
}


export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));