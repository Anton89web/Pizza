import React from 'react';
import Drinks from '../Data/drinks.json'

const DrinksMenu = () => {
  const arrDrinks = Drinks
  return (
    <div className="single-offer-category-item isotope-item cat4">

      {arrDrinks.map(e => (
        <div className="single-offer-item" key={e.name}>
          <div className="single-offer-details">
            <div className="single-offer-title">{e.name}</div>
            <div className="single-offer-content">
              <p>0.5 литра</p>
            </div>
          </div>
          <div className="single-offer-price">{e.price} ₽</div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};

export default DrinksMenu;