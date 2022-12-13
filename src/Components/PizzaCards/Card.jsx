import React, {useState} from 'react';

const Card = ({imageUrl, title, ingredients, types, sizes, price}) => {
  const [testoIndex, setTestoIndex] = useState(0)
  const [size, setSize] = useState(0)


  const testoType = ["тонкое", "традиционное"]


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
            <button className="button button--outline button--add">
              {/*<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path*/}
              {/*    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"*/}
              {/*    fill="white"></path>*/}
              {/*</svg>*/}
              <span style={{fontSize: 20}}>Купить</span></button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;