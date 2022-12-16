import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAmount, setSum} from "../../redux/slices/cartSlice";


const Card = ({imageUrl, title, ingredients, types, sizes, price}) => {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.cartSlice.amount)
  const sum = useSelector(state => state.cartSlice.sum)
  const [testoIndex, setTestoIndex] = useState(0)
  const [size, setSize] = useState(0)
  const testoType = ["тонкое", "традиционное"]

  function changeAmount(i, price) {
    dispatch(setAmount(i))
    dispatch(setSum(sum + price))
  }

  return (
    <>
      <div className="offer-menu2-item-single">
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
                onClick={() => setTestoIndex(type)}
                className={(testoIndex === type) ? "active" : ""}>{testoType[type]}</li>)}
            </ul>
            <ul style={{"marginBottom": 0}}>
              {sizes.map((e, i) => <li
                key={e}
                onClick={() => setSize(i)}
                className={(size === i) ? "active" : ""}>{e} см.</li>)}
            </ul>
          </div>
          <div className="line_cart">
            <span className="single-offer-menu2-price">от {price} руб.</span>
            <button className="button button--outline button--add" onClick={() => changeAmount(amount + 1, price)}>
              <span style={{fontSize: 20}}>Купить</span></button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;