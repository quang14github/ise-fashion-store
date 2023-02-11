import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Register.css";
const Register = () => {
  return (
    <div className="register">
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
                            <li className="active">
                                <span>Đăng ký</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-heading-page">
                <div className="header-page clearfix">
                    <h1>Tạo tài khoản</h1>
                </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-content-page">
                <div className="userbox">
                        <form accept-charset="UTF-8" action="/account" id="create_customer" method="post">
                            <input name="form_type" type="hidden" value="create_customer" />
                            <input name="utf8" type="hidden" />

                            <div id="last_name" className="clearfix large_form">
                                <label htmlFor="last_name" className="label icon-field">
                                    <i className="icon-login icon-user"></i>
                                </label>
                                <input onkeyup="this.value=this.value.replace(/[^a-z,0-9]/g,'');" type="text" 
                                    name="customer[last_name]" placeholder="Họ" id="last_name" class="text" size="30" />
                            </div>

                            <div id="first_name" className="clearfix large_form">
                                <label htmlFor="first_name" className="label icon-field">
                                    <i className="icon-login icon-user"></i>
                                </label>
                                <input onkeyup="this.value=this.value.replace(/[^a-z,0-9]/g,'');" type="text" 
                                    name="customer[first_name]" placeholder="Tên" id="first_name" class="text" size="30" />
                            </div>

                            <div id="phone" className="clearfix large_form">
                                <label htmlFor="phone" className="label icon-field">
                                    <i className="icon-login icon-phone"></i>
                                </label>
                                <input onkeyup="this.value=this.value.replace(/[^a-z,0-9]/g,'');" type="text" 
                                    name="customer[phone]" placeholder="Số điện thoại" id="phone" class="text" size="30" />
                            </div>

                            <div className="clearfix large_form">
                                <label htmlFor="customer_email" className="icon-field">
                                    <i className="icon-login icon-envelope"></i>
                                </label>
                                <input required type="email" 
                                    name="customer[email]" id="customer_email" placeholder="Email" class="text" />
                            </div>

                            <div className="clearfix large_form">
                                <label htmlFor="customer_password" className="icon-field">
                                    <i className="icon-login icon-shield"></i>
                                </label>
                                <input required type="password" name="customer[password]"
                                    id="customer_password" placeholder="Mật khẩu" class="text" size="16" /> 
                            </div>
                            
                            <div className="clearfix action_account_customer">
                                <div className="action_bottom button dark">
                                    <input type="submit" className="btn btn-signin" value="Đăng ký" />
                                </div>
                            </div>
                            <div className="clearfix req_pass">
                                <a href="#" className="comeback">
                                    <i className="fa fa-long-arrow-left"></i> 
                                    Quay lại trang chủ
                                </a>
                            </div>
                        </form>
                    </div>                   
                </div>
            </div>
        
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Register;
