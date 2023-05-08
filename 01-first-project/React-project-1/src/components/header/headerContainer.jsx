import { connect } from "react-redux";
import Header from "./header";
import React from "react";
import axios from "axios";
import { setAuthUserData , setFetching } from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    debugger
    componentDidMount() {
        debugger
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
        .then(response => {
            debugger
            this.props.setFetching(false)
            let {id,email,login} = response.data.data;
            if (response.data.resultCode === 0  ) {
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