import React from 'react';
import Header from '../components/Header';
import './order.css';
import deliveryImg from '../assets/delivery-image.png';
import choseImg from '../assets/choose-image.png';
import pickImg from '../assets/pick-meals-image.png';
import Footer from '../components/Footer';

const Order = () => {
    return (
        <div className='order'>
            <Header />
            <main>
                <section>
                    <div>
                        <h3>How it works</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            rerum consequuntur recusandae sed adipisci in tenetur tempora numquam.
                            Nulla dolor consectetur asperiores laboriosam perferendis in nostrum,
                            nam dolorum aliquid debitis?</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={pickImg} alt="" />
                        <h3>Pick meals</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero itaque officia ipsam, harum modi consequatur aperiam ullam, veritatis ex eius omnis</p>
                    </div>
                    <div>
                        <img src={choseImg} alt="" />
                        <h3>Chose how often</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero itaque officia ipsam, harum modi consequatur aperiam ullam, veritatis ex eius omnis</p>
                    </div>
                    <div>
                        <img src={deliveryImg} alt="" />
                        <h3>Fast delivery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero itaque officia ipsam, harum modi consequatur aperiam ullam, veritatis ex eius omnis</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Order;