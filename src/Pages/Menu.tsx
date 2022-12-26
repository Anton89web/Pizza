import React, {useEffect} from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

const Menu = () => {
    const menuItems = Object.entries({
        Пицца: "pizzas",
        "Кусок пиццы": "pizza-slice",
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

