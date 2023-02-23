import React from 'react';
import Header from '../components/Header';
import './home.css';
import arrow_right from '../assets/arrow_right.png';
import imgHomeFood from '../assets/home-banner-image.png';
import imgHomeFood2 from '../assets/about-background-image.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <main>
                <section>
                    <div className="containerText">
                        <h1>Your favorite food <br></br> Delivered hot & fresh</h1>

                        <p>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating,<br></br>
                            so you can cook a fresh food
                        </p>

                        <Link to='/Order'>
                            <button className='orderNowButton'><h3>Order Now </h3><img src={arrow_right} alt="" fill="red" /></button>
                        </Link>
                    </div>
                    <div className="containerImage">
                        <img src={imgHomeFood} alt="" />
                    </div>
                </section>
                <section>
                    <div className="containerImage">
                        <img src={imgHomeFood2} alt="" />
                    </div>
                    <div className="containerText">
                        <h2>Green foods are an important part of a balanced diet !</h2>
                        <p>Green foods are abundant in nutrients associated with heart health including, vitamin K, magnesium, potassium, dietary nitrates, and folates.
                            A meta-analysis found that consuming green vegetables every day could reduce CVD risk by 15.8%.</p>
                    </div>
                </section>
            </main>
        </div >
    );
};

export default Home;