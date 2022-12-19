import React, {useEffect, useRef, useState} from 'react';
import Card from "../Components/PizzaCards/Card";
import Sort from "../Components/Sort";
import {Link} from "react-router-dom";
import Skeleton from "../Components/PizzaCards/Skeleton";
import Categories from "../Components/Categories";
import Search from "../Components/Search";
import Pagination from "../Components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setPageNumber} from "../redux/slices/filterSlice";


const Pizza = () => {
  const dispatch = useDispatch()
  const {sortIndex, sortName, categoryId, pageNumber} = useSelector(state => (state.filterSlice))
  const {amount, sum, products} = useSelector(state => state.cartSlice)
  const [pizzas, setPizzas] = useState();
  const [loaded, setLoaded] = useState(false);
  const [popup, setPopup] = useState(false)
  const [value, setValue] = useState();
  const sortRef = useRef()


  const onChangePage = (page) => {
    dispatch(setPageNumber(page))
  };

  const path = categoryId ? '' : `?p=${pageNumber}&l=6`

  useEffect(() => {
    axios.get('https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas' + path)
      .then(res => {
        setPizzas(res.data)
        setLoaded(res.data)
      })

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pageNumber, categoryId])

  useEffect(() => {
    function closePopup(e) {
      if (!e.path.includes(sortRef.current)) {
        setPopup(false)
      }
    }

    document.body.addEventListener('click', (e) => closePopup(e))
    return () => document.body.removeEventListener('click', (e) => closePopup(e))
  }, [])

  const filter = value ? pizzas.filter(e => e.title.toLowerCase().includes(value.toLowerCase())) : pizzas;

  const changeCategory = function (pizzas) {
    switch (categoryId) {
      case 0 :
        return pizzas;
      case 1 :
        return pizzas.filter(a => a.category === 1)
      case 2 :
        return pizzas.filter(a => a.category === 2)
      case 3 :
        return pizzas.filter(a => a.category === 3)
      case 4 :
        return pizzas.filter(a => a.category === 4)
      case 5 :
        return pizzas.filter(a => a.category === 5)
    }
  }

  const changeSort = function (pizzas) {
    switch (sortIndex) {
      case 0 :
        return pizzas.sort((a, b) => a.rating - b.rating)
      case 1 :
        return pizzas.sort((a, b) => b.rating - a.rating)
      case 2 :
        return pizzas.sort((a, b) => a.price - b.price)
      case 3 :
        return pizzas.sort((a, b) => b.price - a.price)
      case 4 :
        return pizzas.sort((a, b) => b.title.localeCompare(a.title))
      case 5 :
        return pizzas.sort((a, b) => a.title.localeCompare(b.title))
    }
  }


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

          <div className="header">
            <div className="container_flex"><a href="/">
              <div className="header__logo" style={{display: "flex", "alignItems": "center"}}>
                <img width="38" src="/static/images/logo/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
                     alt="Pizza logo"/>
                <div>
                  <p style={{"lineHeight": "15px", marginBottom: 0, maxWidth: 170}}>Самая вкусная пицца во вселенной</p>
                </div>
              </div>
            </a>
              <Search value={value} setValue={setValue}/>
              <div className="header__cart">
                <Link className="button_cart button--cart" to="/cart"><span>{sum} ₽</span>
                  <div className="button__delimiter"></div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>{amount}</span></Link></div>
            </div>
          </div>


          <div className="content__top">
            <div className="categories">
              <Categories/>
            </div>
            <div className="sort" ref={sortRef}>
              <div className="sort__label">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"></path>
                </svg>
                <b>Сортировка по:</b><span onClick={() => setPopup(!popup)}>{sortName}</span></div>
              {popup &&
              <Sort popup={popup} setPopup={setPopup}/>}
            </div>
          </div>

          <div className="offer-menu2-wrapper">
            <div className="offer-menu2-items">
              {loaded ? changeSort(changeCategory(filter)).map(pizza => <Card {...pizza} key={pizza.id}/>)
                : [...new Array(6)].map((e, i) => <Skeleton key={i}/>)
              }
              <div className="clear"></div>
            </div>
            {!categoryId && <Pagination page={pageNumber} setPage={onChangePage}/>}

          </div>
        </div>
        {/*<-- end page wrapper -->*/}
      </div>
      {/*<-- end container -->*/}
    </div>
  );
};

export default Pizza;