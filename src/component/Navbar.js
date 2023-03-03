import React from 'react';

//style
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.navbar}>
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