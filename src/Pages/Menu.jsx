import React from 'react';

const Menu = () => {
  return (
    <div className="container-wrapper">
      {/*<div className="page-bg" style=" background-image: url(upload/bg-pizza.jpg); "></div>*/}
      <div id="container">
        {/*<-- start container -->*/}
        <div className="page-title-wrapper">
          <div className="page-title-outher">
            <div className="page-title-inner">
              <span className="page-title-icon flaticon-pizza-slice"></span>
              <h1 className="page-title">Меню</h1>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="page-wrapper">
          <div className="offer-menu-wrapper">
            <ul id="filters" className="single-offer-category-filter option-set" data-option-key="filter">
              <li className="filter-cat"><a className="selected" href="#filter" data-option-value=".cat1">Пицца</a></li>
              <li className="filter-cat"><a href="#filter" data-option-value=".cat2">Кусок пиццы</a></li>
              <li className="filter-cat"><a href="#filter" data-option-value=".cat3">Пицца - рулетики</a></li>
              <li className="filter-cat"><a href="#filter" data-option-value=".cat4">Напитки</a></li>
              <li className="filter-cat"><a href="#filter" data-option-value=".cat5">Соусы</a></li>
            </ul>

            <div className="offer-menu-items">
              <div className="single-offer-category-item isotope-item cat1">
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Гавайская</div>
                    <div className="single-offer-content">
                      <p>Ананас, грибы, маслины, томатный соус</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 360 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Освежающая</div>
                    <div className="single-offer-content">
                      <p>Свежие томаты, чеснок, красный лук, сыр, мясной фарш, оливки</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 390 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Дары моря</div>
                    <div className="single-offer-content">
                      <p>Оливки, рыба-меч, осьминог, креветки, свежие грибы, свежие томаты, сыр</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 410 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Кальцоне</div>
                    <div className="single-offer-content">
                      <p>Свежий рикотта, пармезан, лимонный базилик, перец, томатный соус, моцарелла</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 420 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Классическая</div>
                    <div className="single-offer-content">
                      <p>Пепперони, сыр, маслины, томатный соус, грибы, мясо, лук, салат</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 370 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Неаполитанская</div>
                    <div className="single-offer-content">
                      <p>Томаты, орегано, чеснок, оливковое масло, пепперони, сыр, красный лук, томатный соус, грибы</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 390 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Фермерская</div>
                    <div className="single-offer-content">
                      <p>Свежие грибы, свежий зеленый перец, томаты, маслины, мясо, сосиски</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 360 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Мексиканская</div>
                    <div className="single-offer-content">
                      <p>Жареные бобы, красный энчилада соус, смесь из сыров, начо, кукуруза, лук, сальса, чоризо</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 400 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Маргарита</div>
                    <div className="single-offer-content">
                      <p>Пепперони, сыр, маслины, томатный соус, грибы, лук</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 380 ₽</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="single-offer-category-item isotope-item cat2">
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">From sea</div>
                    <div className="single-offer-content">
                      <p>Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes, cheese</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 70 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Classic</div>
                    <div className="single-offer-content">
                      <p>Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat, onion, salad</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 60 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Farmer</div>
                    <div className="single-offer-content">
                      <p>Fresh mushrooms, fresh green bell peppers, tomatoes, black olives, meat, sausages</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 80 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Margherita</div>
                    <div className="single-offer-content">
                      <p>Pepperoni, cheese, black olives, tomatoe sause, mushrooms, onion</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 90 ₽</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="single-offer-category-item isotope-item cat3">
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Тунец, Сыр, Лук, Кукуруза</div>
                    <div className="single-offer-content">
                      <p>Порция 3 - 9 шт</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 90 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Моцарелла, Пармезан, Лимонный базилик</div>
                    <div className="single-offer-content">
                      <p>Порция 3 - 9 шт</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 110 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Салями, сыр</div>
                    <div className="single-offer-content">
                      <p>Порция 3 - 9 шт</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 70 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Томаты, Сыр, Чеснок</div>
                    <div className="single-offer-content">
                      <p>Порция 3 - 9 шт</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 60 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Сыр, ветчина</div>
                    <div className="single-offer-content">
                      <p>Порция 3 - 9 шт</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 80 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Сыр, Пепперони, Грибы</div>
                    <div className="single-offer-content">
                      <p>Порция 3 - 9 шт</p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                  <div className="single-offer-price">от 100 ₽</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="single-offer-category-item isotope-item cat4">
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Coca-cola</div>
                    <div className="single-offer-content">
                      <p>0.5 литра</p>
                    </div>
                  </div>
                  <div className="single-offer-price">80 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Pepsi</div>
                    <div className="single-offer-content">
                      <p>0.5 литра</p>
                    </div>
                  </div>
                  <div className="single-offer-price">90 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Fanta</div>
                    <div className="single-offer-content">
                      <p>0.5 литра</p>
                    </div>
                  </div>
                  <div className="single-offer-price">60 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">МОРС ИЗ КЛЮКВЫ</div>
                    <div className="single-offer-content">
                      <p>0.5 литра</p>
                    </div>
                  </div>
                  <div className="single-offer-price">50 ₽</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="single-offer-category-item isotope-item cat5">
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Белый</div>
                    <div className="single-offer-content">
                      <p>Моцарелла, майонез, чеснок, рикотта</p>
                    </div>
                  </div>
                  <div className="single-offer-price">б0 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Красный</div>
                    <div className="single-offer-content">
                      <p>Томаты, бобы, перец, оливковое масло</p>
                    </div>
                  </div>
                  <div className="single-offer-price">б0 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Острый</div>
                    <div className="single-offer-content">
                      <p>Чили, помидоры, черный перец</p>
                    </div>
                  </div>
                  <div className="single-offer-price">30 ₽</div>
                  <div className="clear"></div>
                </div>
                <div className="single-offer-item">
                  <div className="single-offer-details">
                    <div className="single-offer-title">Сырный</div>
                    <div className="single-offer-content">
                      <p>Чеддер, Пармезан, Бри</p>
                    </div>
                  </div>
                  <div className="single-offer-price">50 ₽</div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        {/*<-- end page wrapper -->*/}
      </div>
      {/*<-- end container -->*/}
      <div className="clear"></div>
    </div>
  );
};

export default Menu;