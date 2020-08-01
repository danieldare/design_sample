import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavBarStyle, Container } from './NavBar.style';
import Logo from 'components/Logo/Logo';
import useSticky from 'hooks/useSticky';

export default function NavBar() {
  const { isSticky } = useSticky();
  const [isMenuOpen, setMenuOpen] = useState(false);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  const config = {
    smooth: true,
    offset: 0,
    duration: 500,
    activeClass: 'active',
    className: 'link',
  };

  const links = [
    {
      name: 'Companies',
      to: 'companies',
    },
    {
      name: 'Team',
      to: 'team',
    },
    {
      name: 'Resources',
      to: 'resources',
    },
    {
      name: 'Programs',
      to: 'program',
    },
    {
      name: 'Blog',
      to: 'blog',
    },
    {
      name: 'Contact',
      to: 'contact',
    },
  ];

  return (
    <Container>
      <NavBarStyle className={`${isSticky && 'navbar-sticky'}`}>
        <div onClick={scrollToTop} className={`brand ${isSticky && ' logo-sticky'}`}>
          <Logo />
          <div className="brand-text">Gidara</div>
        </div>
        <ul className={`nav_items ${isMenuOpen && ' show'}`}>
          {links.map((link) => {
            return (
              <li className="nav_item" key={link.name}>
                <Link activeClass="active" to={link.to} {...config}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={`menu-btn ${isMenuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!isMenuOpen)}>
          <div className="menu-btn__burger"></div>
        </div>
      </NavBarStyle>
    </Container>
  );
}
