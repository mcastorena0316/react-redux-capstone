import React from 'react';
import {
  Link,
} from 'react-router-dom';


const Header = () => (
  <div className="header">
    <ul>
      <Link to="/"><li>Missions</li></Link>
    </ul>
    <ul />
  </div>
);

export default Header;
