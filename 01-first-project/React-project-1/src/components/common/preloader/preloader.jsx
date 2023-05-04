import React from "react";
import style from './preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={style.block}><div className={style.lds_dual_ring} /></div> 
    )
}

export default Preloader;