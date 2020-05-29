import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <ul>
      <Link to="/missionlist"><li>Missions</li></Link>
    </ul>
  </div>
);

export default Header;
