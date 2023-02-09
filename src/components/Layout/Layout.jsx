import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
