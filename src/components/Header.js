import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './Header.css';


const Header = () => (
  <header>
    <div className="logo-div">
      <img src="https://i.ibb.co/WvPzK3t/logo.png" alt="logo" />
      <h1>SpaceX Launch Missions</h1>
    </div>
    <div className="route-div">
      <Link to="/"><p>MISSIONS</p></Link>
      <Link to="/about"><p>ABOUT</p></Link>

    </div>
  </header>
);

export default Header;
