import { connect } from "react-redux";
import Header from "./header";
import React from "react";
import { logoutTC } from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}






let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching
    }
};







export default connect(mapStateToProps, { logoutTC })(HeaderContainer);