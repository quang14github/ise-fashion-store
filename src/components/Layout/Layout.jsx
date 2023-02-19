import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="main-body">
      <div className="countdownTopPromotion">
        <a href="https://evadeeva.com.vn/collections/end-of-season-sale-50-70-eoss03">
          <img
            className="hidden-xs"
            src="//theme.hstatic.net/200000000133/1000569834/14/banner_countdown_top_desktop.jpg?v=6313"
            alt="sale"
          />
        </a>
      </div>
      <Header />
      <div className="clear-fix"></div>
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
