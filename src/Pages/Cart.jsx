import React from 'react';

const Cart = () => {
  return (
    <div className="container-wrapper">
      <div id="container">
        {/*<-- start container -->*/}
        <div className="page-title-wrapper">
          <div className="page-title-outher">
            <div className="page-title-inner">
              <span className="page-title-icon flaticon-pizza-slice"></span>
              <h1 className="page-title">Корзина</h1>
            </div>
          </div>
        </div>
        <div className="page-wrapper">

          <div className="content">
            <div className="cart cart--empty"><h2>Корзина пустая <span>😕</span></h2>
              <p>Вероятней всего, вы не
                заказывали ещё пиццу.<br/>Для того, чтобы заказать пиццу, перейди на главную страницу.<br/>
              </p>
              <img src="/static/images/cart/empty-cart.db905d1f4b063162f25b.png" alt="Empty cart"/>
              <a className="button button--black" href="/">
                <span>Вернуться назад</span>
              </a>
            </div>
          </div>

        </div>
        {/*<-- end page wrapper -->*/}
      </div>
      {/*<-- end container -->*/}
      <div className="clear"></div>
    </div>
  );
};

export default Cart;