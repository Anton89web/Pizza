import React, {useEffect, useState} from 'react';
import pizzasJson from "../Data/pizzas.json"
import PizzaCard from "../Components/PizzaCard";

const Pizza = () => {
  const [pizzas, setPizzas] = useState();
  const [loaded, setLoaded] = useState(true);
  const [categoryIndex, setCategoryIndex] = useState(0)

  const arrCategory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]


  useEffect(() => {
    // fetch("../Data/pizzas.json")
    //   .then(res => res.json())
    //   .then(
    //     (res) => {
    //       console.log(res)
    //       setPizzas(res)
    //       setLoaded(true)
    //       console.log(res)
    //     },
    //     (error, res) => {
    //       console.log(res)
    //       alert(error)
    //     }
    //   )
  }, [])
  return (
    <div className="container-wrapper">
      {/*<div className="page-bg" style=" background-image: url(upload/bg-pizza.jpg); "></div>*/}
      <div id="fullwidth-container">
        {/*<-- start container -->*/}
        <div className="page-title-wrapper">
          <div className="page-title-outher">
            <div className="page-title-inner">
              <span className="page-title-icon flaticon-pizza-slice"></span>
              <h1 className="page-title">Пицца</h1>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="page-wrapper">

          <div className="content__top">
            <div className="categories">
              <ul>
                {arrCategory.map((category, index) => (
                  <li onClick={() => setCategoryIndex(index)}
                      className={(categoryIndex === index) ? "active" : ""}>{category}</li>
                ))}
              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"></path>
                </svg>
                <b>Сортировка по:</b><span>популярности</span></div>
            </div>
          </div>

          <div className="offer-menu2-wrapper">
            <div className="offer-menu2-items">

              {loaded ?
                pizzasJson.map(pizza => <PizzaCard {...pizza}/>)
                : <h3>Загружается...</h3>
              }

              <div className="clear"></div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        {/*<-- end page wrapper -->*/}
      </div>
      {/*<-- end container -->*/}
      <div className="clear"></div>
    </div>
  );
};

export default Pizza;