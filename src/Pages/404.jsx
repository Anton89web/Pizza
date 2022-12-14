import React from 'react';
import {Link} from "react-router-dom";

const NoFound = () => {
  return (
    <div className="container-wrapper">
      <div id="container">
        {/*<-- start container -->*/}
        <div className="page-title-wrapper">
          <div className="page-title-outher">
            <div className="page-title-inner">
              <span className="page-title-icon flaticon-pizza-slice"></span>
              <h1 className="page-title">Ошибка</h1>
            </div>
          </div>
        </div>
        <div className="page-wrapper">

          <div className="content">
            <div className="cart cart--empty">
              <h2>Такая страница не существует
              </h2>
              <img
                style={{maxHeight: 500}}
                src="/static/images/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.webp"
                alt="404"/>
              <Link className="button button--black" to="/" style={{marginTop: 50}}>
                <span>На главную</span>
              </Link>
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

export default NoFound;