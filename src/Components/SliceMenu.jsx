import React from 'react';
import pizzasJson from "../Data/pizzas.json"

const SliceMenu = () => {
  const arr = pizzasJson
  return (
    <div className="single-offer-category-item isotope-item cat2">
      {
        arr.map(e => (
          <div className="single-offer-item" key={e.id}>
            <div className="single-offer-details">
              <div className="single-offer-title">{e.title}</div>
              <div className="single-offer-content">
                <p>{e.ingredients}</p>
              </div>
            </div>
            <div className="single-offer-price">от {e.slice_price} ₽</div>
            <div className="clear"></div>
          </div>
        ))
      }
    </div>
  );
};

export default SliceMenu;