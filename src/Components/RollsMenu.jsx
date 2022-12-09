import React from 'react';
import Rolls from '../Data/rolls.json'


const RollsMenu = () => {
  const arrRolls = Rolls
  return (
    <div className="single-offer-category-item isotope-item cat3">
      {
        arrRolls.map(e => (
          <div className="single-offer-item" key={e.ingr}>
            <div className="single-offer-details">
              <div className="single-offer-title">{e.ingr}</div>
              <div className="single-offer-content">
                <p>Порция 3 - 9 шт</p>
              </div>
            </div>
            <div className="single-offer-price">от {e.price} ₽</div>
            <div className="clear"></div>
          </div>
        ))
      }

    </div>
  );
};

export default RollsMenu;