import React from 'react';
import SaucesJson from '../Data/sauces.json'

const SaucesMenu = () => {
  const arr = SaucesJson
  return (
    <div className="single-offer-category-item isotope-item cat5">
      {
        arr.map(e => (
          <div className="single-offer-item" key={e.name}>
            <div className="single-offer-details">
              <div className="single-offer-title">{e.name}</div>
              <div className="single-offer-content">
                <p>{e.ingr}</p>
              </div>
            </div>
            <div className="single-offer-price">{e.price} ₽</div>
            <div className="clear"></div>
          </div>
        ))
      }
    </div>
  )
};

export default SaucesMenu;