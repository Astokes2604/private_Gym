import React from 'react';
import './Main.css';

const AboutUs = () => {
    return (
        <div>
            <h1 id="aboutus-title">About Us</h1>
            <div id="aboutus-section">
                <section className="aboutus-item">
                    <h3>Our Mission</h3>
                    <p>At Stokes Gym, our mission is to help individuals unlock their full potential through fitness and community.</p>
                </section>
                <hr />
                <section className="aboutus-item">
                    <h3>Our Values</h3>
                    <p>We believe in hard work, dedication, and creating an inclusive environment for everyone to achieve their goals.</p>
                </section>
                <hr />
                <section className="aboutus-item">
                    <h3>Our Team</h3>
                    <p>Our team of certified trainers and staff are here to support you every step of the way, whether you're a beginner or experienced athlete.</p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
