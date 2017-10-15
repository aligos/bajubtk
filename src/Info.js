import React from "react";

const Info = () => (
  <div className="container">
    <div className="faq-section">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="home-image">
            <a href="/pages/about-us">
              <img src="/assets/img/faqs.gif" alt="faqs" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="home-image">
            <a href="/pages/about-us">
              <img src="/assets/img/size-guides.gif" alt="size-guides" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="home-image">
            <a href="/pages/about-us">
              <img src="/assets/img/delivery-info.gif" alt="about-us" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
