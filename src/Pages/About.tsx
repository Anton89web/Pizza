import React from 'react';

const About = () => {
  return (
    <div className="container-wrapper">
      <div id="container">
        {/*<-- start container -->*/}
        <div className="page-title-wrapper">
          <div className="page-title-outher">
            <div className="page-title-inner">
              <span className="page-title-icon flaticon-pizza-slice"></span>
              <h1 className="page-title">About us</h1>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="page-wrapper">
          <h1>We use fresh ingredients.<br/> Why is that?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
          <p><img className="aligncenter size-full wp-image-63" src="/static/images/about/vegies.jpeg" alt=""
                  width="415"
                  height="366"/></p>
          <h1>Our team</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
          <p>&nbsp;</p>
          <p><img className="aligncenter size-full wp-image-65" src="/static/images/about/team.jpeg" alt="" width="431"
                  height="532"/>
          </p>
          <div className="clear"></div>
        </div>
        {/*<-- end page wrapper -->*/}
      </div>
      {/*<-- end container -->*/}
      <div className="clear"></div>
    </div>
  );
};

export default About;