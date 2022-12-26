import React, {FC, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

interface Pizza {
    imageUrl: string;
    title: string;
    ingredients: string[];
    sizes: number[];
    price: number;
}


const FullPizza: FC = () => {
    const [pizza, setPizza] = useState<Pizza>()
    const {pizzaName} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get(`https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas?title=${pizzaName}`)
                setPizza(data[0])
            } catch (e) {
                alert("Ошибка при получении пицц")
                navigate('/pizza')
                console.log(e)
            }
        }

        fetchPizza()
    }, [])
    if (!pizza) {
        return <h1>Загрузка...</h1>
    }
    return (
        <div className="container-wrapper">
            <div id="container">
                {/*<-- start container -->*/}
                <div className="page-title-wrapper">
                    <div className="page-title-outher">
                        <div className="page-title-inner">
                            <span className="page-title-icon flaticon-pizza-slice"></span>
                            <h1 className="page-title">{pizzaName}</h1>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <div className="fullPizza__container">
                        <h2 className="fullPizza__title">
                            {pizza.title}
                        </h2>
                        <img className="fullPizza__img" src={pizza.imageUrl} alt="pizza image"/>
                        <div className="fullPizza__descr">
                            <p className="fullPizza__ingredients">
                                {pizza.ingredients}
                            </p>
                            <p className="fullPizza__technics">
                                Техники приготовления
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque dignissimos
                                dolorem ea
                                explicabo
                                fuga praesentium, sint sunt vero? Aperiam deserunt fugiat iusto labore minima nesciunt
                                obcaecati quam
                                voluptas
                                voluptatibus.
                            </p>
                            <p className="fullPizza__sizes">
                                Размеры пиццы: {pizza.sizes.join(", ")}
                            </p>
                            <div className="fullPizza__price">
                                от {pizza.price} руб.
                            </div>
                        </div>
                    </div>
                    <Link className="button button--black" to="/pizza">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
                {/*<-- end page wrapper -->*/}
            </div>
            {/*<-- end container -->*/}
            <div className="clear"></div>
        </div>
    );
};

export default FullPizza;