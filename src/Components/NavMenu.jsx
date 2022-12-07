import React from 'react';

const NavMenu = () => {
  return (
    <>
      <div id="header" className="header-wrapper">
        <div className="logo">
          <a href="index.html" title="ALBERTOS - пицца">
            <img className="logoImage" src="../../static/images/logo/logo.png" alt="ALBERTOS - пицца"/>
            <img className="logoImageRetina" src="images/logo-retina.png" alt="ALBERTOS - пицца"/>
          </a>
          <div className="clear"></div>
        </div>
        <div className="menu-wrapper">
          <div className="main-menu">
            <div className="menu-main-nav-menu-container">
              <ul id="menu-main-nav-menu" className="sf-menu">
                <li className="menu-item menu-item-home current-menu-item current_page_item"><a
                  href="index.html">Главная</a></li>
                <li className="menu-item"><a href="menu.html">Меню</a></li>
                <li className="menu-item"><a href="pizzas.html">Пицца</a></li>
                <li className="menu-item"><a href="about.html">О нас</a></li>
                <li className="menu-item"><a href="contact.html">Контакты</a></li>
                <li className="menu-item"><a href="blog.html">Блог</a></li>
                <li className="menu-item"><a href="blog.html">Корзина</a></li>
              </ul>
            </div>
          </div>
          <div className="menu-icons-inside">
            <div className="menu-icon menu-icon-mobile"><span className="menu-icon-create"></span></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="footer">
          <div className="footer-socials">
            <ul className="socials-sh">
              <li>
                <a className="fa sh-socials-url fa-twitter" href="#" title="Twitter" target="_blank"></a>
              </li>
              <li>
                <a className="fa sh-socials-url fa-facebook" href="#" title="Facebook" target="_blank"></a>
              </li>
              <li>
                <a className="fa sh-socials-url fa-linkedin" href="#" title="LinkedIn" target="_blank"></a>
              </li>
              <li>
                <a className="fa sh-socials-url " href="#" title="" target="_blank"></a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            @ 2022 Создано Антоном из <a href="https://krd.top-academy.ru/" title="Pego HTML Themes" target="_blank">Академии
            TOP</a>.
          </div>
        </div>
      </div>

      <div className="mobile-menu-wrapper">
        <div className="menu-main-nav-menu-container">
          <ul id="menu-main-nav-menu-1" className="mobile-menu">
            <li className="menu-item menu-item-home current-menu-item current_page_item"><a
              href="index.html">Главная</a></li>
            <li className="menu-item"><a href="menu.html">Меню</a></li>
            <li className="menu-item"><a href="pizzas.html">Пицца</a></li>
            <li className="menu-item"><a href="about.html">О нас</a></li>
            <li className="menu-item"><a href="contact.html">Контакты</a></li>
            <li className="menu-item"><a href="blog.html">Блог</a></li>
            <li className="menu-item"><a href="blog.html">Корзина</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;