import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addProduct} from "../../redux/slices/cartSlice";

export interface PizzaProps {
    id: number
    imageUrl: string
    title: string
    ingredients: string
    types: number[]
    sizes: number[]
    price: number
    testo: string,
    size: number
    count: number
}


const Card = ({id, imageUrl, title, ingredients, types, sizes, price}: PizzaProps) => {
    const dispatch = useDispatch()
    const countPizzaStorage = JSON.parse(localStorage.getItem('cartProducts') as string)
        .filter((e: PizzaProps) => e.id === id).reduce((sum: any, current: any) => sum + current.count, 0)
    const [testoIndex, setTestoIndex] = useState(0)
    const [size, setSize] = useState(0)
    const testoType = ["тонкое", "традиционное"]
    const [localCountPizza, setLocalCountPizza] = useState(0)
    let pricePizza = size ? Math.floor(price * (sizes[size]) / 26) : price

    function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const product = {
            id,
            imageUrl,
            title,
            price: pricePizza,
            testo: testoType[testoIndex],
            size: sizes[size]
        }
        dispatch(addProduct(product))
    }

    const reduce = JSON.parse(localStorage.getItem('cartProducts') as string)
        .filter((e: PizzaProps) => e.id === id).reduce((sum: any, current: any) => sum + current.count, 0)
    console.log(reduce)

    return (
        <div className="offer-menu2-item-single">
            <Link to={title}>
                <img className="offer-menu2-frame" src="/static/images/frame.png"/>
                <div className="offer-menu2-shadow"></div>
                <div className="offer-menu2-thumb">
                    <img className="offer-menu2-inner-frame" src="/static/images/inner-shadow.png"/>
                </div>
                <div className="offer-menu2-thumb-image"><img src={imageUrl} width="313"
                                                              height="220" alt="hawaii"/></div>
                <div className="clear"></div>
                <span className="offer-menu2-icon flaticon-pizza-slice"></span>
                <div className="single-offer-menu2-title">{title}</div>
            </Link>
            <div className="offer-menu2-details">
                <div className="single-offer-menu2-content">
                    <p style={{"lineHeight": "1.3em"}}>{ingredients}</p>
                </div>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((type) => <li
                            key={type}
                            onClick={(e) => {
                                e.preventDefault()
                                setTestoIndex(type)
                            }}
                            className={(testoIndex === type) ? "active" : ""}>{testoType[type]}</li>)}
                    </ul>
                    <ul style={{"marginBottom": 0}}>
                        {sizes.map((e, i) => <li
                            key={e}
                            onClick={(e) => {
                                e.preventDefault()
                                setSize(i)
                            }}
                            className={(size === i) ? "active" : ""}>{e} см.</li>)}
                    </ul>
                </div>
                <div className="line_cart">
                    <span className="single-offer-menu2-price">от {pricePizza} руб.</span>
                    <button className="button button--outline button--add"
                            onClick={(e) => {
                                addToCart(e);
                                setLocalCountPizza(localCountPizza + 1)
                            }}>
                        <span style={{fontSize: 20}}>Купить</span>
                        {(!!localCountPizza || !!countPizzaStorage) &&
                        <span className="button__count">{localCountPizza || countPizzaStorage}</span>}
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Card;