import React, {FC, useEffect, useState} from 'react';
import SkeletonMenu from "./SkeletonMenu";
import {Link} from "react-router-dom";
import {fetchData} from "../../Api/FetchProducts";

interface Pizzas {
    id: number
    imageUrl: string
    title: string
    ingredients: string
    price: number
}

const PizzasMenu: FC = () => {
    const [pizzas, setPizzas] = useState<[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)
    const path = 'pizzas'

    useEffect(() => {
        fetchData(path, setPizzas, setLoaded)
    }, [])

    return (
        <div className="single-offer-category-item isotope-item cat1">
            {loaded ?
                pizzas.map((e: Pizzas) => (
                    <div className="single-offer-item" key={e.id}>
                        <img src={e.imageUrl} width={100} height={80} alt="rolls  image"/>
                        <div className="single-offer-details">
                            <div className="single-offer-title">{e.title}</div>
                            <div className="single-offer-content">
                                <p>{e.ingredients}</p>
                            </div>
                        </div>
                        <div className="single-offer-price">от {e.price} ₽</div>
                        <Link to="/pizza" className="button_cart button--cart button_menu">
                            Купить пиццу
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