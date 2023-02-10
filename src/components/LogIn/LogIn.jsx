import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const LogIn = () => {
  return (
    <div className="login">
      <Header />
      <main>
        <div className = "layout-account">
            <div className = "padding-rl-40">
                <div className = "breadcrumb-shop">
                    <div>
                        <ol className="breadcrumb breadcrumb-arrows">
                            <li>
                                <a href="">Trang chủ</a>
                            </li>
                            <li>
                                <a href="">Tài khoản</a>
                            </li>
                            <li>
                                <span>Đăng nhập</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-heading-page">
                <div className="header-page clearfix">
                    <h1>Đăng nhập</h1>
                </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-content-page">
                <div id="customer-login">
                    <div id="login" className="userbox">
                        <div className="accounttype">
                            <h2 className="title"></h2>
                        </div>
                        <form accept-charset="UTF-8" action="" id="customer_login" method="post">
                            <input name="form_type" type="hidden" value="customer_login" />
                            <input name="utf8" type="hidden" value="" />
                            <div className="clearfix large_form">
                                <label htmlFor="customer_email" className="icon-field">
                                    <i className="icon-login icon-envelope"></i>
                                </label>
                                <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" 
                                    value name="customer[email]" id="customer_email" placeholder="Email" class="text" />
                            </div>
                            <div className="clearfix large_form">
                                <label htmlFor="customer_password" className="icon-field">
                                    <i className="icon-login icon-shield"></i>
                                </label>
                                <input required type="password" value name="customer[password]"
                                    id="customer_password" placeholder="Mật khẩu" class="text" size="16" /> 
                            </div>
                            <div className="clearfix action_account_customer">
                                <div className="action_bottom button dark">
                                    <input type="submit" className="btn btn-signin" value="Đăng nhập" />
                                </div>
                                <div className="req_pass">
                                    <a href="#" onClick="showRecoverPasswordForm();return false;">
                                        Quên mật khẩu?
                                    </a>
                                    <br />hoặc
                                    <a href="#" title="Đăng ký">Đăng ký</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LogIn;
