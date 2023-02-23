import React from 'react';

import './footer.css';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>

            <div className="socialMedia">
                <h1>FOODIE</h1>
                <AiFillTwitterCircle />
                <AiFillInstagram />
                <AiFillYoutube />
                <AiFillFacebook />
            </div>
            <div className="rdmInfoFooter">
                <nav className="col1">
                    <ul>
                        <li>
                            Quality
                        </li>
                        <li>
                            Help
                        </li>
                        <li>
                            Share
                        </li>
                        <li>
                            Carreers
                        </li>
                        <li>
                            Comments
                        </li>
                        <li>
                            Work
                        </li>

                    </ul>
                </nav>
                <nav className="col2">
                    <ul>
                        <li>
                            +332233.00299
                        </li>
                        <li>
                            foodUs@food.com
                        </li>
                        <li>
                            contact@food.com
                        </li>
                        <li>
                            press@food.com
                        </li>
                    </ul>
                </nav>
                <nav className="col3">
                    <ul>
                        <li>
                            Terms & Conditions
                        </li>
                        <li>
                            Privacy Policy
                        </li>

                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;