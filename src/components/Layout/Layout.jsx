import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div class="main-body">
      <div class="countdownTopPromotion">
        <a href="https://evadeeva.com.vn/collections/end-of-season-sale-50-70-eoss03">
          <img
            class="hidden-xs"
            src="//theme.hstatic.net/200000000133/1000569834/14/banner_countdown_top_desktop.jpg?v=6313"
            alt="sale"
          />
        </a>
      </div>
      <Header />
      <div class="clear-fix"></div>
      <main class="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
