import React from "react";
import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";
import "./Header.css";
const Header = () => {
  return (
    <header id="header" class="clearfix">
      <TopBar />
      <div class="main-header hidden-xs">
        <div class="padding-lr-0 col-xs-12 col-sm-3 col-md-3 col-lg-2">
          <div
            class="logo-main"
            itemscope=""
            itemtype="http://schema.org/Organization"
          >
            <a href="https://evadeeva.com.vn" title="Logo" itemprop="url">
              <img
                src="//file.hstatic.net/1000358207/file/logo_eva.svg"
                alt="Eva De Eva"
                class="img-responsive logoimg"
                itemprop="logo"
              />
            </a>
          </div>
        </div>
        <Navbar />
        <div class="padding-lr-0 col-xs-12 col-sm-9 col-md-9 col-lg-3">
          <div class="rightHeader">
            <div class="bagHeader">
              <span>
                <a href="/cart" title="Giỏ hàng">
                  <img
                    src="//theme.hstatic.net/200000000133/1000569834/14/bagIcon2.png?v=6303"
                    alt="Giỏ hàng"
                  />
                  <span class="countCart">0</span>
                </a>
              </span>
            </div>
            <div class="accountHeader">
              <a href="/account/login" title="Tài khoản">
                <img
                  src="//theme.hstatic.net/200000000133/1000569834/14/accountIcon.png?v=6303"
                  alt="Tài khoản"
                />
              </a>
            </div>
            <div class="searchHeader">
              <form action="/search" class="searchDesktop">
                <input type="hidden" name="type" value="product" />
                <input
                  required=""
                  type="text"
                  name="q"
                  id="searchInputDesktop"
                  class="searchInput"
                  placeholder="Tìm sản phẩm..."
                  value=""
                />
                <input type="submit" class="searchButton" value="" />
              </form>
              <div id="resultSearchDesktop" class="resultDesktop">
                <div class="innerResultDesktop"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
