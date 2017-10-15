import React from "react";

const Pagination = () => (
  <div className="container">
    <div className="prev-next col-md-12">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <img className="prev" src="/assets/img/arrow.svg" alt="img-alt" />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <img className="next" src="/assets/img/arrow.svg" alt="img-alt" />
        </div>
      </div>
    </div>
  </div>
);

export default Pagination;
