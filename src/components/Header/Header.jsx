import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";
import "./Header.css";
const Header = () => {
  return (
    <header id="header" className="clearfix">
      <TopBar />
      <div className="main-header hidden-xs">
        <div className="padding-lr-0 col-xs-12 col-sm-3 col-md-3 col-lg-2">
          <div
            className="logo-main"
            itemScope=""
            itemType="http://schema.org/Organization"
          >
            <NavLink to="/">
              <img
                src="//file.hstatic.net/1000358207/file/logo_eva.svg"
                alt="Eva De Eva"
                className="img-responsive logoimg"
                itemProp="logo"
              />
            </NavLink>
          </div>
        </div>
        <Navbar />
        <div className="padding-lr-0 col-xs-12 col-sm-9 col-md-9 col-lg-3">
          <div className="rightHeader">
            <div className="bagHeader">
              <span>
                <a href="/cart" title="Giỏ hàng">
                  <img
                    src="//theme.hstatic.net/200000000133/1000569834/14/bagIcon2.png?v=6303"
                    alt="Giỏ hàng"
                  />
                  <span className="countCart">0</span>
                </a>
              </span>
            </div>
            <div className="accountHeader">
              <a href="/account/login" title="Tài khoản">
                <img
                  src="//theme.hstatic.net/200000000133/1000569834/14/accountIcon.png?v=6303"
                  alt="Tài khoản"
                />
              </a>
            </div>
            <div className="searchHeader">
              <form action="/search" className="searchDesktop">
                <input type="hidden" name="type" value="product" />
                <input
                  required=""
                  type="text"
                  name="q"
                  id="searchInputDesktop"
                  className="searchInput"
                  placeholder="Tìm sản phẩm..."
                  value=""
                />
                <input type="submit" className="searchButton" value="" />
              </form>
              <div id="resultSearchDesktop" className="resultDesktop">
                <div className="innerResultDesktop"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
