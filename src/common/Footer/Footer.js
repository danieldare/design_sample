import React from 'react';
import { FooterStyle, FooterContainer } from './Footer.style';
import Logo from 'components/Logo/Logo';

export default function Footer() {
  return (
    <FooterStyle>
      <FooterContainer>
        <div className="footer-container top">
          <div className="footer_links_holder">
            <ul className="footer-links">
              <li>Store</li>
              <li>Catalog</li>
              <li>Popular</li>
              <li>Features</li>
            </ul>
            <ul className="footer-links">
              <li>About</li>
              <li>Catalog</li>
              <li>Popular</li>
              <li>Features</li>
            </ul>
            <ul className="footer-links">
              <li>Catalog</li>
              <li>Catalog</li>
              <li>Popular</li>
              <li>Features</li>
            </ul>
          </div>

          <div className="brand-section">
            <Logo />
            <div className="brand-text">
              <p className="brand-name-text">Gidara</p>
              <p className="brand-motto">Your music career success partner</p>
            </div>
          </div>
        </div>

        <div className="footer-container bottom">
          <div className="copyright">
            <p>© 2018. All rights reserved</p>
          </div>
          <div className="social-icons">
            <p>© 2018. All rights reserved</p>
          </div>
        </div>
      </FooterContainer>
    </FooterStyle>
  );
}
