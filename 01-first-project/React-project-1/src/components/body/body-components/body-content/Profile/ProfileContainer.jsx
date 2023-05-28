import React from "react";
import Profile from './profile.jsx';
import { connect } from "react-redux";
import { setUserProfile, getProfileApiTC, getStatusApiTC, updateStatusApiTC } from './../../../../../redux/profileReducer';
import { withAuthRedirect } from "../../../../../hoc/withAuthRedirect.tsx";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from "redux";

let withRouter = (Component) => {
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
        let userId = this.props.router.params.userId;
        debugger
        if (!userId && this.props.isAuth) {
            userId = this.props.authorizedUserId;
        }
        if (!userId && !this.props.isAuth) {
            <Navigate to={'/login'}/>
        }
        this.props.getProfileApiTC(userId)
        this.props.getStatusApiTC(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusApiTC} {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    };
}


export default compose(
    connect(mapStateToProps, { setUserProfile, getProfileApiTC, getStatusApiTC, updateStatusApiTC }),
    withRouter,
    withAuthRedirect)(ProfileContainer);