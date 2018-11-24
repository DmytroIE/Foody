import React from 'react';

function AppNav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/fff">
            menu
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/fff">
            about
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/fff">
            contact
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/fff">
            delivery
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
