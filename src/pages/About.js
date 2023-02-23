import React from 'react';
import Header from '../components/Header';
import imgHomeFood2 from '../assets/about-background-image.png';
import Footer from '../components/Footer';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <Header />
            <main>
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
                <section>
                    <h2>Info about nutritrion</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore autem eligendi quaerat ab incidunt. Deserunt corporis
                        expedita odio quas,
                        quod nam iure modi, id eaque dolor eum omnis. Vero, velit?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quod consequuntur dolorum tempora a possimus autem illo ratione nobis illum,
                        nihil nulla iusto error nam dicta ipsa perspiciatis doloribus laudantium
                        cupiditate?</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;