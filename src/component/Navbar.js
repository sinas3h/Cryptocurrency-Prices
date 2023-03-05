import React, { useState } from 'react';

//style
import style from './Navbar.module.css'

const Navbar = () => {

    const [menu , setMenu] = useState(false)

    const menuHandler = () => {
        setMenu(!menu)
    }

    return (
        <div className={style.container}>
            <div className={!menu ? style.menu : style.menuActive} onClick={menuHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={!menu ? style.navbar : `${style.navbar} ${style.navbarMenu}`}>
                <div className={style.navbarLeft}>
                    <p>Cryptocurrencies</p>
                    <p>Exchanges</p>
                    <p>NFT</p>
                    <p>Learn Crypto</p>
                </div>

                <div className={style.navbarRight}>
                    <p>Login</p>
                    <p className={style.button}>Sign Up</p>
                </div>

            </div>
        </div>
    );
};

export default Navbar;