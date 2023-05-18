import React from "react";
import Profile from './profile.jsx';
import { connect } from "react-redux";
import { setUserProfile, getProfileApiTC } from './../../../../../redux/profileReducer';
import { withAuthRedirect } from "../../../../../hoc/withAuthRedirect.tsx";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

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
        if (!userId) { userId = 28998; }
        this.props.getProfileApiTC(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile} {...this.props} />
        )
    }
}






let AuthRedirectComponent = withAuthRedirect(ProfileContainer)







let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
}


export default connect(mapStateToProps, { setUserProfile, getProfileApiTC })(withRouter(AuthRedirectComponent));