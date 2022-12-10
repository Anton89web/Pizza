import React, {useEffect, useState} from 'react';


const RollsMenu = () => {
  const [rolls, setRolls] = useState()
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/rolls")
      .then(res => res.json())
      .then(
        (res) => {
          setRolls(res)
          setLoaded(true)
        },
        (error, res) => {
          alert(error)
        }
      )
  }, [])

  return (
    <div className="single-offer-category-item isotope-item cat3">
      {loaded ?
        rolls.map(e => (
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
        : <h1>Загружается...</h1>
      }

    </div>
  );
};

export default RollsMenu;