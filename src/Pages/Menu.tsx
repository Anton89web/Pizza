import React, {useEffect} from 'react';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCartState} from "../redux/slices/cartSlice";

const Menu = () => {
    const {amount, sum} = useSelector(selectCartState)
    const menuItems = Object.entries({
        Пицца: "pizzas",
        "Пицца-роллы": "pizza-rolls",
        Напитки: "drinks",
        Соусы: "sauces",
    })

    const navigate = useNavigate();
    useEffect(() => navigate("pizzas"), [])

    return (
        <div className="container-wrapper">
            {/*<div className="page-bg" style=" background-image: url(upload/bg-pizza.jpg); "></div>*/}
            <div id="container">
                {/*<-- start container -->*/}
                <div className="page-title-wrapper">
                    <div className="page-title-outher">
                        <div className="page-title-inner">
                            <span className="page-title-icon flaticon-pizza-slice"></span>
                            <h1 className="page-title">Меню</h1>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="page-wrapper">
                    <div className="header__cart flex_end">
                        <Link to="/cart" className="button_cart button--cart"><span>{sum} ₽</span>
                            <div className="button__delimiter"></div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                    stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                    stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                    stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
                            <span>{amount}</span></Link></div>
                    <div className="offer-menu-wrapper">
                        <ul id="filters" className="single-offer-category-filter option-set" data-option-key="filter">
                            {menuItems.map(e => (
                                <li className="filter-cat" key={e[0]}>
                                    <NavLink
                                        style={({isActive}) => ({color: isActive ? "#fab940" : ""})}
                                        to={e[1]} data-option-value=".cat1">{e[0]}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="offer-menu-items isotope"
                             style={{position: 'relative', overflow: 'hidden', height: ''}}>
                            {<Outlet/>}
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
                {/*<-- end page wrapper -->*/}
            </div>
            {/*<-- end container -->*/
            }
            <div className="clear"></div>
        </div>
    )

};

export default Menu;

