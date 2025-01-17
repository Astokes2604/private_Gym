import React from 'react';
import { Link } from "react-router-dom";
import './Main.css';

const Home = ({ isAuthenticated, handleLogout }) => {
    return (
        <div>
            <div>
                <h3 id="potential">Unlock Your Potential!</h3>
                <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>

            <div id="info-section">
                <section className="info-section">
                    <h4>About Us</h4>
                    <p>Learn more about Stokes Gym, our mission, values, and what we stand for.</p>
                </section>
                <hr />
                <section className="info-section">
                    <h4>Catalog</h4>
                    <p>Explore our catalog of gym memberships, personal training services, and products.</p>
                </section>
                <hr />
                <section className="info-section">
                    <h4>Login</h4>
                    <p>Access your account to manage your memberships, schedule, and more.</p>
                </section>
                <hr />
                <section className="info-section">
                    <h4>Register</h4>
                    <p>Create a new account to join the Stokes Gym community.</p>
                </section>
            </div>
        </div>
    );
}

export default Home;
