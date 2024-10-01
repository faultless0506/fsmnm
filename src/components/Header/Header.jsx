import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
      <header className="header">
        <div className="header__bar-top"></div>
        <div className="header__bar container">
          <div className={`header__burger ${isMenuOpen ? "active" : ""}`}
          onClick={handleBurgerClick}>
            {/* добавить active */}
            <span></span>
          </div>
          <img src="img/logo_clear.png" alt="logo" className="header__logo" />
          <nav className="header__nav">
            <ul className={`header__nav-list ${isMenuOpen ? "open" : ""}`}
            onClick={handleBurgerClick}>
              {/* добавить open */}
              <div className="header__nav-mobile-logo">
                <img
                  src="img/logo_clear.png"
                  alt="logo"
                  className="header__logo-mobile"
                />
              </div>
              <li className="header__nav-item">
              <a href="/" className="slide-btns slide-d-right">Федерация</a>
                <ul className="header__nav-sublist">
                  <li className="header__nav-sublist-item">
                    <a href="#!">О виде спорта</a>
                  </li>
                  <li className="header__nav-sublist-item">
                    <a href="#!">Руководство</a>
                  </li>
                  <li className="header__nav-sublist-item">
                    <a href="#!">Попечитеельский совет</a>
                  </li>
                  <li className="header__nav-sublist-item">
                    <a href="#!">Документы</a>
                  </li>
                  <li className="header__nav-sublist-item">
                    <a href="#!">Контакты</a>
                  </li>
                  <li className="header__nav-sublist-item">
                    <a href="#!">Партнеры</a>
                  </li>
                </ul>
              </li>

              <li className="header__nav-item"><a href="/news" className="slide-btns slide-d-right">Новости</a></li>
              <li className="header__nav-item">
              <a href="/news" className="slide-btns slide-d-right">Новости</a>
              </li>
              <li className="header__nav-item"><a href="/news" className="slide-btns slide-d-right">Новости</a></li>
              <li className="header__nav-item"><a href="/news" className="slide-btns slide-d-right">Новости</a></li>
            </ul>
          </nav>
          <div className="header__contacts">
            <a href="https://vk.com/mfsmn">VK</a>
          </div>
          {/* <div className="header__void"></div> */}
        </div>

        <div className="header__bar-bottom"></div>
      </header>
  );
}
