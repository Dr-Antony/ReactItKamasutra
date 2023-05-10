import { connect } from "react-redux";
import Header from "./header";
import React from "react";
import axios from "axios";
import { setAuthUserData , setFetching } from "../../redux/authReducer";

import { usersAPI } from "../../api/apiOfUsers";

class HeaderContainer extends React.Component {
    debugger
    componentDidMount() {
        debugger
        this.props.setFetching(true)
        usersAPI.getMyData()
        .then(data => {
            debugger
            this.props.setFetching(false)
            let {id,email,login} = data.data;
            if (data.resultCode === 0  ) {
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
        login: state.auth.login,
        isFetching: state.auth.isFetching
    }
};







export default connect(mapStateToProps,{setAuthUserData,setFetching})(HeaderContainer);