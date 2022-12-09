import React from 'react';
import Pizzas from "../Data/pizzas.json"

const PizzasMenu = () => {
  const arrPizzas = Pizzas;
  return (
    <div className="single-offer-category-item isotope-item cat1">
      {arrPizzas.map(e => (
        <div className="single-offer-item" key={e.id}>
          <div className="single-offer-details">
            <div className="single-offer-title">{e.title}</div>
            <div className="single-offer-content">
              <p>{e.ingredients}</p>
            </div>
          </div>
          <div className="single-offer-price">от {e.price} ₽</div>
          <div className="clear"></div>
        </div>
      ))}


    </div>
  );
};

export default PizzasMenu;