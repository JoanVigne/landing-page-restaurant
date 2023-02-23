import React from 'react';
import Header from '../components/Header';
import johnDoe from '../assets/john-doe-image.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './comments.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Comments = () => {
    return (
        <div className='comments'>
            <Header />
            <main>
                <h2>Comments</h2>
                <section>
                    <h3>What they are saying</h3>
                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                        . Aperiam rem corporis dolores non quo.
                        Ea consequatur quis nam fugiat earum quae perspiciati
                        soluta. Voluptate voluptas doloremque,
                        dolore provident adipisci excepturi?</h5>
                </section>
                <section className='aComment'>
                    <img src={johnDoe} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                        . Aperiam rem corporis dolores non quo.</p>
                    <p><AiFillStar color="yellow" /><AiFillStar color="yellow" /><AiFillStar color="yellow" /><AiFillStar color="yellow" /><AiFillStar color="yellow" /></p>
                    <h4>John Doe</h4>
                </section>

                <section>
                    <h2> Do you need any more informations ?</h2>
                    <Link className='contactMe'
                        to='#'
                        onClick={() => {
                            window.location = 'mailto:yourmail@domain.com';
                        }}
                    >Contact me</Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Comments;