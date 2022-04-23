import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from 'assets/images/logo.png';
import LOGO_MOBILE from 'assets/images/logo_footer.png';
import NavbarTopMobile from './navbar-top-mobile';
import NavbarTop from './navbar-top';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__inner__logo-content">
          <Link to="/" data-view="home">
            <img
              className="navbar__inner__logo-content__image"
              src={LOGO}
              alt="Logotipo de SpecAtelier"
            />
            <img
              className="navbar__inner__logo-content__image__mobile"
              src={LOGO_MOBILE}
              alt="Logotipo de SpecAtelier"
            />
          </Link>
        </div>
        <NavbarTopMobile />
        <NavbarTop />
      </div>
    </nav>
  );
};

export default NavBar;
