import React from 'react';
import './Main.css';

const Catalog = () => {
    return (
        <div>
            <h1 id="catalog-title">Catalog</h1>
            <div id="catalog-section">
                <section className="catalog-item">
                    <h3>Membership Plans</h3>
                    <p>Choose from a variety of membership plans designed to suit your fitness goals.</p>
                </section>
                <hr />
                <section className="catalog-item">
                    <h3>Personal Training Services</h3>
                    <p>Get personalized training sessions with one of our certified trainers to reach your peak performance.</p>
                </section>
                <hr />
                <section className="catalog-item">
                    <h3>Gym Merchandise</h3>
                    <p>Shop for gym wear, accessories, and other products to enhance your workout experience.</p>
                </section>
            </div>
        </div>
    );
};

export default Catalog;
