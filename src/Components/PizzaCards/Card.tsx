import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/slices/cartSlice";
import {Link} from "react-router-dom";

interface CardProps {
    id: string
    imageUrl: string
    title: string
    ingredients: string
    types: number[]
    sizes: number[]
    price: number
    testo?: string,
    size?: number
}

// @ts-ignore
const Card: FC = ({id, imageUrl, title, ingredients, types, sizes, price}: CardProps) => {
    const dispatch = useDispatch()
    const [testoIndex, setTestoIndex] = useState(0)
    const [size, setSize] = useState(0)
    const testoType = ["тонкое", "традиционное"]


    // function changeAmount(i, price) {
    //     dispatch(setAmount(i))
    //     dispatch(setSum(sum + price))
    // }

    function addToCart(e: MouseEvent) {
        e.preventDefault()
        const product = {
            id,
            imageUrl,
            title,
            price,
            testo: testoType[testoIndex],
            size: sizes[size]
        }
        dispatch(addProduct(product))
    }


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
                <div className="offer-menu2-details">
                    <div className="single-offer-menu2-title">{title}</div>
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
                        <span className="single-offer-menu2-price">от {price} руб.</span>
                        <button className="button button--outline button--add"
                                onClick={(e: MouseEvent) => {
                                    addToCart(e)
                                }}>
                            <span style={{fontSize: 20}}>Купить</span></button>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Card;