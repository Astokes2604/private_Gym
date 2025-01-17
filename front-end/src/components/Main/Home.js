import React from 'react'
import Catalog from './Catalog';
import AboutUs from './AboutUs';
import'./Main.css';

const Home = () => {
    return (
        <div>
            <h1 id='stokes'>Stokes Gym</h1>
            <nav>
                <AboutUs />
                <Catalog />
            </nav>
            <div>
                <h3 id='potential'>Unlock Your Potential!</h3>
            </div>
        </div>
    )
}

export default Home;