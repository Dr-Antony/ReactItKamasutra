import React from 'react';
import style from './ProfileStatus.module.css';

import Preloader from '../../../../../common/preloader/preloader';





class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }


    activatedEditMode = () => {
        console.log(this.state.editMode)
        this.setState({ editMode: true })
        console.log(this.state.editMode)
    }
    deactivatedEditMode = () => {
        console.log(this.state.editMode)
        this.setState({ editMode: false })
        console.log(this.state.editMode)
    }


    render() {
        return (
            <div>
                {!this.state.editMode ? <div><button onClick={this.activatedEditMode.bind(this)}>{this.props.status}</button></div> : <div><input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status} /></div>}
            </div>
        )
    }
}
export default ProfileStatus;
