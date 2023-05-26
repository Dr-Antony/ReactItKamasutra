import React from 'react';
import './header.css'
import logo from '../../img/logo.jpg';
import home2 from '../../img/home2.png'
import { NavLink } from 'react-router-dom';
import Preloader from '../common/preloader/preloader';



const Header = (props) => {
    debugger
    return (
        <header className='header'>
            <div className='header__logo'><img src={logo} /></div>
            <div className='header__content'>
                <div className='header__navigation'></div>
                <div className='header__auth'>
                    {props.isFetching && !props.isAuth ? <Preloader /> : null}
                        {
                            props.isAuth ?
                            <div className='header__auth-y-container'>
                                <NavLink to={'/Profile/'} className='header__auth-y'>
                                    <div className='auth__img'><NavLink to={'/Profile/'}><img src={home2} /></NavLink></div>
                                    <div className='auth__login'><NavLink to={'/Profile/'}>{props.login}</NavLink></div>
                                    
                                </NavLink>
                                <div><button onClick={props.logoutTC}  className='header__auth-y-logout'>logout</button></div>
                            </div>
                                :
                                <div className='header__auth-n'>
                                    <div className='auth__login'><NavLink className='auth__btn' to={'/login'}>Login</NavLink></div>
                                    <div className='auth__registration'><NavLink className='auth__btn' to={'/registration'}>Registration</NavLink></div>
                                </div>
                        }
                </div>
            </div>
        </header>
    );
};

export default Header;
















// import React from 'react';
// import './header.css'
// import logo from '../../img/logo.jpg';
// import home2 from '../../img/home2.png'
// import { NavLink } from 'react-router-dom';
// import Preloader from '../common/preloader/preloader';

// const Header = (props) => {
//     debugger
//     return (
//         <header className='header'>
//             <div className='header__logo'><img src={logo} /></div>
//             <div className='header__content'>
//                 <div className='header__navigation'></div>
//                 <div className='header__auth'>
//                     {props.isFetching ? <Preloader /> : null}
//                         {
//                             props.isAuth ?
//                                 <NavLink to={'/Profile/'} className='header__auth-y'>
//                                     <div className='auth__img'><NavLink to={'/Profile/'}><img src={home2} /></NavLink></div>
//                                     <div className='auth__login'><NavLink to={'/Profile/'}>{props.login}</NavLink></div>
//                                 </NavLink>
//                                 :
//                                 <div className='header__auth-n'>
//                                     <div className='auth__login'><NavLink className='auth__btn' to={'/login'}>Login</NavLink></div>
//                                     <div className='auth__registration'><NavLink className='auth__btn' to={'/registration'}>Registration</NavLink></div>
//                                 </div>
//                         }
                    
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;