import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="header__bar container">
        <div
          className={`header__burger ${isMenuOpen ? "active__burger" : ""}`}
          onClick={handleBurgerClick}
        >
          <span></span>
        </div>
        <img
          src="img/icons/logo_clear.png"
          alt="logo"
          className="header__logo"
        />
        <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
          <ul
            className={`header__nav-list ${isMenuOpen ? "open" : ""}`}
            // onClick={handleBurgerClick}
          >
            <div className="header__nav-mobile-logo">
              <img
                src="img/icons/logo_clear.png"
                alt="logo"
                className="header__logo-mobile"
              />
            </div>
            <li className="header__nav-item slide-btns slide-d-right ">
              <span>Федерация</span>
              <ul className="header__nav-sublist ">
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    О виде спорта
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 2
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 3
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 4
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 5
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 6
                  </Link>
                </li>
              </ul>
            </li>

            <li className="header__nav-item slide-btns slide-d-right">
              <NavLink to="/competitions" onClick={handleCloseMenu}>
                Соревнования
              </NavLink>
            </li>
            <li className="header__nav-item slide-btns slide-d-right">
              <Link to="/news" onClick={handleCloseMenu}>
                Новости
              </Link>
            </li>
            {/* <li className="header__nav-item  slide-btns slide-d-right">
              <Link to="/">меню 4</Link>
            </li> */}
            <li className="header__nav-item slide-btns slide-d-right">
              <span>меню 5</span>
              <ul className="header__nav-sublist">
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    О виде спорта
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 2
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 2
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 3
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 4
                  </Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/" onClick={handleCloseMenu}>
                    подменю 5
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="header__contacts">
          <Link to="https://vk.com/mfsmn">VK</Link>
        </div>
      </div>
    </header>
  );
}
