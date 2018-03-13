import React from 'react';

import CorporateNav from './corporate-nav';

const Header = () => (
  <div className="Container">
    <CorporateNav />
    <header id="nav" className="NavigationContainer">
      <div className="Navigation Container u-cf">
        <div className="SiteNav-siteName">
          Claims UI
        </div>
        <nav className="MobileNav">
          <a href="#" className="MobileNav-menu">Menu</a>
          <a href="#" className="MobileNav-menu-open">Close</a>
        </nav>
        <div className="SiteNav-container">
          <nav className="SiteNav" role="menubar">
            <div className="SiteNav-item is-active">
              <a
                href="/PolicyLookUp"
                tabIndex="0"
                className="SiteNav-itemLink"
                aria-haspopup="true"
                aria-expanded="false"
                aria-labelledby=""
              >
                <span className="SiteNav-itemLinkText" id="">Policy Search</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
