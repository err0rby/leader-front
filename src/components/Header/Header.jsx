import React from 'react';
import style from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.logoBlock}>
                <h1>EVENT ID</h1>
            </div>
            <div className={style.appBlock}>
                <Link to='/events'>EVENTS</Link>
                <Link to='/'>HOME</Link>
            </div>
            <div className={style.authBlock}>
                <Link>LOG IN</Link>
                <Link>LOG OUT</Link>
            </div>
        </div>
    );
};

export default Header;