import React from 'react';
import { Link } from 'react-router-dom';

const CorporateNav = () => (
  <nav className="CorporateNav">
    <div className="Container">
      <div className="CorporateNav-container">
        <div className="CorporateNav-logo">
          <Link to="/" />
        </div>
        <div className="CorporateNav-menu">
          <a href="/logout">Logout</a>
        </div>
      </div>
    </div>
  </nav>
);

export default CorporateNav;
