import React, {useEffect, useState} from 'react';

const PizzasMenu = () => {
  const [pizzas, setPizzas] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas")
      .then(res => res.json())
      .then(
        (res) => {
          setPizzas(res)
          setLoaded(true)
        },
        (error, res) => {
          alert(error)
        }
      )
  }, [])
  return (
    <div className="single-offer-category-item isotope-item cat1">
      {loaded ?
        pizzas.map(e => (
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
        ))
        : <h1>Загружается...</h1>
      }
    </div>
  );
};

export default PizzasMenu;