import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";
import useToken from "../../hooks/useToken";
import { CheckError } from "../../utils/CheckError";

import "./Header.css";
const Header = () => {
  // const [cartCount, setCartCount] = useState([]);
  // const { token } = useToken();
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/collections/" + searchId);
  };
  //call API
  // useEffect(() => {
  //   fetch("http://localhost:8080/cart", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(CheckError)
  //     .then((result) => {
  //       setCartCount(
  //         result.cartItems.reduce(
  //           (accumulator, item) => accumulator + parseInt(item.quantity),
  //           0
  //         )
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
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
            <Link to="/">
              <img
                src="//file.hstatic.net/1000358207/file/logo_eva.svg"
                alt="Eva De Eva"
                className="img-responsive logoimg"
                itemProp="logo"
              />
            </Link>
          </div>
        </div>
        <Navbar />
        <div className="padding-lr-0 col-xs-12 col-sm-9 col-md-9 col-lg-3">
          <div className="rightHeader">
            <div className="bagHeader">
              <span>
                <Link to="/cart" title="Giỏ hàng">
                  <img
                    src="//theme.hstatic.net/200000000133/1000569834/14/bagIcon2.png?v=6303"
                    alt="Giỏ hàng"
                  />
                  {/* <span className="countCart">{cartCount}</span> */}
                </Link>
              </span>
            </div>
            <div className="accountHeader">
              <Link to="/account" title="Tài khoản">
                <img
                  src="//theme.hstatic.net/200000000133/1000569834/14/accountIcon.png?v=6303"
                  alt="Tài khoản"
                />
              </Link>
            </div>
            <div className="searchHeader">
              <form
                action="/search"
                className="searchDesktop"
                onSubmit={(e) => handleSearch(e)}
              >
                <input type="hidden" name="type" value="product" />
                <input
                  required=""
                  type="text"
                  name="q"
                  id="searchInputDesktop"
                  className="searchInput"
                  placeholder="Tìm sản phẩm..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
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
