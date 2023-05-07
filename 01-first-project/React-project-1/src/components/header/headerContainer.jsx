import { connect } from "react-redux";
import Header from "./header";
import React from "react";
import axios from "axios";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    debugger
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
        .then(response => {
            debugger
            let {id,email,login} = response.data.data;
            if (response.data.resaultCode === 0  ) {
                this.props.setAuthUserData(id,email,login)
            }
        })
    }
    render(){
        return (
            <Header {...this.props}/>
        )
    }
}






let mapStateToProps=(state)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};







export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);