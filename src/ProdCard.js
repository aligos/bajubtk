import React from "react";
import ImagePaletteProvider from "react-image-palette";

const ProdCard = ({ name, image }) => (
  <div className="col-md-6 col-sm-12">
    <ImagePaletteProvider
      crossOrigin
      image={`assets/img/${image}.jpg`}
      key={image}
    >
      {({ backgroundColor, color, alternativeColor }) => (
        <div className="pop-card">
          <div className="pop-card__img">
            <img src={`assets/img/${image}.jpg`} alt="img-alt" />
          </div>
          <div className="pop-card__content">
            <h2 className="pop-card__title" style={{ borderColor: backgroundColor }}>
              <a href="/" style={{ color }}>
                {name}
              </a>
            </h2>
            <div className="row">
              <div className="col-xs-12">
                <p className="prod-desc" style={{ color: alternativeColor }}>
                  Addofo Casual Shoes
                </p>
              </div>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <label className="fs-16">
                    <span className="orange-red">Rp 42.000</span>
                  </label>
                </div>
                <div className="col-xs-6 col-md-6 telusuri">
                  <label className="fs-16">
                    <a className="add-to-cart black">
                      Add <span>To Cart</span>
                    </a>
                  </label>
                </div>
              </div>
              <div className="row prod-action">
                <div className="col-xs-8">
                  <a href="/" className="buy-tokopedia">
                    <img
                      className="buy-img"
                      src="/assets/img/tokopedia.png"
                      alt="tokopedia"
                    />
                    <div className="beli-lewat">
                      <span>Beli lewat:</span>
                      <span className="f-tokopedia"> Tokopedia</span>
                    </div>
                  </a>
                </div>
                <div className="col-xs-4 more-icon">
                  <a href="/">
                    <img
                      className="buy-img"
                      src="/assets/img/plus.svg"
                      alt="plus"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ImagePaletteProvider>
  </div>
);

export default ProdCard;
