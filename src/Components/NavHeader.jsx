import React, {useContext, useRef} from 'react';
import {Link, NavLink} from "react-router-dom";
import {CartAmount} from "../App";

const NavHeader = () => {
    const {amount, setAmount} = useContext(CartAmount)

    const navItems = Object.entries({
      Главная: "/",
      Меню: "menu",
      Пицца: "pizza",
      "О нас": "about",
      Контакты: "contacts",
      Блог: "blog",
      Корзина: "cart "
    })
    const menu = useRef()

    function showMenu() {
      menu.current.classList.toggle("show")
    }

    return (
      <>
        <div id="header" className="header-wrapper">
          <div className="logo">
            <Link to="/" title="ALBERTOS - пицца">
              <img className="logoImage" src="../../static/images/logo/logo.png" alt="ALBERTOS - пицца"/>
              <img className="logoImageRetina" src="images/logo-retina.png" alt="ALBERTOS - пицца"/>
            </Link>
            <div className="clear"></div>
          </div>
          <div className="menu-wrapper">
            <div className="main-menu">
              <div className="menu-main-nav-menu-container">
                <ul id="menu-main-nav-menu" className="sf-menu">
                  {navItems.map(item => (
                    <li className="menu-item menu-item-home current-menu-item" key={item[0]}>
                      <NavLink
                        style={({isActive}) => ({color: isActive ? "#fab940" : ""})}
                        to={item[1]}>{item[0]}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="header__cart">
                  <Link className="button_cart button--cart" to="cart"><span>0 ₽</span>
                    <div className="button__delimiter"></div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path
                        d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path
                        d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>{amount}</span></Link></div>
              </div>
            </div>
            <div className="menu-icons-inside">
              <div className="menu-icon menu-icon-mobile" onClick={() => showMenu()}><span
                className="menu-icon-create"></span></div>
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

        <div ref={menu} className="mobile-menu-wrapper">
          <span className='mobile-menu-close' onClick={() => showMenu()}>X</span>
          <div className="menu-main-nav-menu-container">
            <ul id="menu-main-nav-menu-1" className="mobile-menu">

              {navItems.map(item => (
                <li className="menu-item menu-item-home current-menu-item current_page_item" key={item[0]}
                    onClick={() => showMenu()}>
                  <NavLink
                    style={({isActive}) => ({color: isActive ? "#fab940" : ""})}
                    to={item[1]}>{item[0]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
;

export default NavHeader;