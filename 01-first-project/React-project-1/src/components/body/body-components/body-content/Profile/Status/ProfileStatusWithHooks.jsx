import React, { useEffect, useState } from 'react';
import style from './ProfileStatus.module.css';

import Preloader from '../../../../../common/preloader/preloader';




let ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    debugger
    ////////////////////
    useEffect(() => {
        debugger
        setStatus(status);
    }, [props.status]);
    ////////////////////
    let activatedEditMode = () => {
        setEditMode(true)
    }
    let deactivatedEditMode = () => {
        setEditMode(false)
        debugger
        props.updateStatus(status)
    }
    ////////////////////
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    ////////////////

    return (
        <div>
            {!editMode && <div className={style.button}><button onClick={activatedEditMode}>{status}</button></div>}
            {editMode && <div className={style.input}><input onChange={onStatusChange} onBlur={deactivatedEditMode} autoFocus={true} value={status} /></div>}
        </div>
    )
}
export default ProfileStatusWithHooks;
