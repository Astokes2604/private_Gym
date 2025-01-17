import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./components/Main/Home";
import About from "./components/Main/AboutUs";
import Catalog from "./components/Main/Catalog";
import Checkout from "./components/Checkout/Checkout";
import PaymentFailed from "./components/Checkout/PaymentFailed";
import PaymentSuccess from "./components/Checkout/PaymentSuccess";
import Authentication from "./components/Authentication/Authentication";
import Admin from "./components/AdminPanel/Admin";
import AdminView from "./components/AdminPanel/Members";
import Membership from "./components/Account/Membership";
import Profile from "./components/Account/Proflie";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    setIsAuthenticated(!!authUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authUser');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <h1 id="stokes">Stokes Gym</h1>
        <nav id="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            {isAuthenticated ? (
              <li><button className="auth" onClick={handleLogout}>Logout</button></li>
            ) : (
              <li><Link className="auth" to="/authentication">Login/Register</Link></li>
            )}
          </ul>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path='/about' element={<About />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/paymentfailed' element={<PaymentFailed />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
          <Route path='/authentication' element={<Authentication />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminview' element={<AdminView />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
