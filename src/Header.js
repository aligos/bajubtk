import React from "react";

const Header = () => (
  <div className="container">
    <nav className="home-navigation navbar navbar-light bg-faded">
      <a className="navbar-brand" href="/">
        <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width={20} height={20} alt="logo" />
      </a>
      <form className="form-inline my-2 my-lg-0">
        <i className="icon-search" />
        <input className="navigation-search form-control mr-sm-2" type="text" placeholder="Sedang cari apa Sis?" />
      </form>
      <div className="navbar-right navigation-link">
        <ul className="navigation-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled</a>
          </li>
          <li>
            <a href="/" className="nav-link"><i className="icon-menu" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
