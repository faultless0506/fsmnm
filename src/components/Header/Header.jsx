import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="header__bar container">
        <div
          className={`header__burger ${isMenuOpen ? "active" : ""}`}
          onClick={handleBurgerClick}
        >
          <span></span>
        </div>
        <img src="img/logo_clear.png" alt="logo" className="header__logo" />
        <nav className="header__nav">
          <ul
            className={`header__nav-list ${isMenuOpen ? "open" : ""}`}
            onClick={handleBurgerClick}
          >
            <div className="header__nav-mobile-logo">
              <img
                src="img/logo_clear.png"
                alt="logo"
                className="header__logo-mobile"
              />
            </div>
            <li className="header__nav-item sublist slide-btns slide-d-right">
              <Link to="/">Федерация</Link>
              <ul className="header__nav-sublist">
                <li className="header__nav-sublist-item">
                  <Link to="/">О виде спорта</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 2</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 2</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 3</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 4</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 5</Link>
                </li>
              </ul>
            </li>

            <li className="header__nav-item slide-btns slide-d-right">
              <Link to="#!">меню 2</Link>
            </li>
            <li className="header__nav-item slide-btns slide-d-right">
              <Link to="#!">меню 3</Link>
            </li>
            <li className="header__nav-item  slide-btns slide-d-right">
              <Link to="#!">меню 4</Link>
            </li>
            <li className="header__nav-item  slide-btns slide-d-right">
              <Link to="/competitions">меню 5</Link>
              <ul className="header__nav-sublist">
                <li className="header__nav-sublist-item">
                  <Link to="/">О виде спорта</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 2</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 2</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 3</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 4</Link>
                </li>
                <li className="header__nav-sublist-item">
                  <Link to="/">подменю 5</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="header__contacts">
          <a href="https://vk.com/mfsmn">VK</a>
        </div>
      </div>
    </header>
  );
}
