import React, { useEffect, useState } from 'react';
import style from './ProfileStatus.module.css';

import Preloader from '../../../../../common/preloader/preloader';




let ProfileStatusWithHooks = React.memo((props) => {
    console.log('render')
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    ////////////////////
    useEffect(() => {
        setStatus(status);
    }, [props.status]);
    ////////////////////

    let activatedEditMode = () => {
        setEditMode(true)
    }
    let deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status,props.userId)
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
})
export default ProfileStatusWithHooks;
