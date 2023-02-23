import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoCart from '../assets/logoCart.png';
import menuLogo from '../assets/menu.png';

const Header = () => {

    const [navDisplay, setNavDisplay] = useState("navMenu")
    /*     const menu = document.getElementsByClassName("navMenu")[0]; */
    function handleMenuClick() {
        navDisplay === "" ? setNavDisplay("navMenu") :
            setNavDisplay("");
    }


    return (
        <header>
            <h1>FOODIE</h1>
            <img src={menuLogo} alt="" onClick={handleMenuClick} className="displayMenu" />
            <nav className={navDisplay}>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/About`}>About</Link>

                    </li>
                    <li>
                        <Link to={`/Comments`}>Comments</Link>

                    </li>
                    <li>
                        <Link to={`/Contact`}>Contact</Link>

                    </li>
                    <li>
                        <a href="/"><img src={logoCart} alt="" className='logoCart' /></a>
                    </li>
                    <li>
                        <Link to='/Order'> <button className='bookButton'>Book now</button> </Link>
                    </li>

                </ul>
            </nav>
        </header >
    );
};

export default Header;