import React from 'react';

const Footer = () => (
  <div className="Container">
    <div className="Container u-textCenter u-mV24">
      <a href="#top">Back to top</a>
    </div>
    <footer className="Footer">
      <div className="Footer-container">
        <ul className="Footer-globalLinks">
          <li className="Footer-globalLink">
            <a href="//www.mutualofomaha.com/" target="_blank" rel="noopener noreferrer"><strong>mutualofomaha.com</strong></a>
          </li>
          <li className="Footer-globalLink">
            <a href="//www.mutualofomaha.com/contact/" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </li>
          <li className="Footer-globalLink">
            <a href="//www.mutualofomaha.com/legal/privacy.php" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </li>
          <li className="Footer-globalLink">
            <a href="//www.mutualofomaha.com/legal/terms.php" target="_blank" rel="noopener noreferrer">Terms of Use</a>
          </li>
        </ul>
        <p className="Footer-copyright">&copy; 2018 Mutual of Omaha Insurance Company. <span className="u-noWrap" rel="noopener noreferrer">All rights reserved.</span></p>
        <ul className="Footer-legalLinks">
          <li className="Footer-legalLink">
            <a href="#">Terms of Use</a>
          </li>
          <li className="Footer-legalLink">
            <a href="//www.mutualofomaha.com/legal/privacy.php" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Footer;
