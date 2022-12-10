import React, {useEffect, useState} from 'react';

const DrinksMenu = () => {
  const [drinks, setDrinks] = useState()
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/drinks")
      .then(res => res.json())
      .then(
        (res) => {
          setDrinks(res)
          setLoaded(true)
        },
        (error, res) => {
          alert(error)
        }
      )
  }, [])

  return (
    <div className="single-offer-category-item isotope-item cat4">

      {loaded ? drinks.map(e => (
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
        ))
        : <h1>Загружается...</h1>
      }
    </div>
  );
};

export default DrinksMenu;