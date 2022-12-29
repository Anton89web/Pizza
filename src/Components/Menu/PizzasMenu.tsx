import React, {FC, useEffect, useState} from 'react';
import SkeletonMenu from "./SkeletonMenu";
import {Link} from "react-router-dom";

interface Pizzas {
    id: number
    title: string
    ingredients: string
    price: number
}

const PizzasMenu: FC = () => {
    const [pizzas, setPizzas] = useState<[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas")
            .then(res => res.json())
            .then(
                (res) => {
                    setPizzas(res)
                    setLoaded(true)
                },
                (error: Error) => {
                    alert(error)
                }
            )
    }, [])
    return (
        <div className="single-offer-category-item isotope-item cat1">
            {loaded ?
                pizzas.map((e: Pizzas) => (
                    <div className="single-offer-item" key={e.id}>
                        <div className="single-offer-details">
                            <div className="single-offer-title">{e.title}</div>
                            <div className="single-offer-content">
                                <p>{e.ingredients}</p>
                            </div>
                        </div>
                        <div className="single-offer-price">от {e.price} ₽</div>
                        <Link to="/pizza" className="button_cart button--cart button_menu">
                            Выбрать пиццу
                        </Link>
                        <div className="clear"></div>
                    </div>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    );
};

export default PizzasMenu;