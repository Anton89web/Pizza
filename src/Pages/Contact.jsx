import React from 'react';

const Contact = () => {
  return (
    <div className="container-wrapper">
      <div id="container" className="template-contact-container">
        {/*<-- start container -->*/}
        <div className="page-title-wrapper">
          <div className="page-title-outher">
            <div className="page-title-inner">
              <span className="page-title-icon flaticon-pizza-slice"></span>
              <h1 className="page-title">Контакты</h1>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="page-wrapper">
          <div className="contact-maps">
            <div id="map_canvas" className="mapStyleClass"></div>
          </div>
          <div className="contact-info-wrapper">
            <div className="contact-details">
              <div className="contact-detail contact-detail1">
                <div className="contact-detail-title">Адресс</div>
                <div className="contact-detail-content">
                  <p>ул. Красная 153<br/> Краснодар, Россия</p>
                </div>
              </div>
              <div className="contact-detail contact-detail2">
                <div className="contact-detail-title">Звоните или Пишите</div>
                <div className="contact-detail-content">
                  <p><strong>Телефон / </strong>+7905 408-49-08<br/>
                    <strong>Email / </strong>work1coft@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail contact-detail3">
                <div className="contact-detail-title">Время работы</div>
                <div className="contact-detail-content">
                  <p><strong>Пон – Пят / </strong>8ч – 23ч<br/>
                    <strong>Суббота / </strong>8ч – 01ч<br/>
                    <strong>Воскресенье</strong> (Выходной)</p>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <div role="form" className="wpcf7" id="wpcf7-f49-p15-o1" lang="en-US" dir="ltr">
                <div className="screen-reader-response"></div>

                <form id="contact-form" action="#">
                  <div className="albertos-contact-form">
                    <div className="contact-detail-title">Контактная форма</div>
                    <div className="app-name"><span className="wpcf7-form-control-wrap name-input">
                                            <input name="name" id="name" type="text" value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                   aria-required="true" aria-invalid="false" placeholder="Имя"/></span>
                    </div>
                    <div className="app-phone"><span className="wpcf7-form-control-wrap email-input">
                                            <input name="mail" id="mail" type="text" value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                   aria-required="true" aria-invalid="false"
                                                   placeholder="Email"/></span></div>
                    <p><span className="wpcf7-form-control-wrap appointment-message">
                                            <textarea name="comment" id="comment" cols="40" rows="10"
                                                      className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                      aria-required="true" aria-invalid="false"
                                                      placeholder="Сообщение"></textarea></span></p>
                    <div className="clear"></div>
                    <div className="contact-submit"><input type="submit" value="Отправить "
                                                           className="wpcf7-form-control wpcf7-submit"
                                                           id="submit_contact"/>
                      <div id="msg" className="message"></div>
                    </div>
                  </div>
                </form>
              </div>
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

export default Contact;