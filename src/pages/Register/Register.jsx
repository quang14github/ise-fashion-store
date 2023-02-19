import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
    return (
        <div className="register">
            
         
                <div className="layout-account">
                    {/* path */}
                    <div className="padding-rl-40 breadcrumb-shop">
                        <ol className="breadcrumb breadcrumb-arrows">
                        <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/account">Tài khoản</Link>
                            </li>
                            <li className="active">
                                <span>Đăng ký</span>
                            </li>
                        </ol>
                    </div>

                    {/* name-page */}
                    <div className="col-md-6 col-xs-12 wrapbox-heading-page">
                        <div className="header-page clearfix">
                            <h1>Tạo tài khoản</h1>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12 wrapbox-content-page">
                        {/* register-box */}
                        <div id="register" className="userbox">
                            <div className="accounttype">
                                <h2 className="title">Nhập thông tin</h2>
                            </div>

                            {/* form */}
                            <form acceptCharset="UTF-8" action="/account" id="create_customer" method="post">
                                <input name="form_type" type="hidden" value="create_customer" />
                                <input name="utf8" type="hidden" />

                                {/* last-name box */}
                                <div id="last_name" className="clearfix large_form">
                                    <label htmlFor="last_name" className="label icon-field">
                                        <i className="icon-login icon-user"></i>
                                    </label>
                                    <input onkeyup="this.value=this.value.replace(/[^a-z,0-9]/g,'');" type="text"
                                        name="customer[last_name]" placeholder="Họ" id="last_name" className="text" size="30" />
                                </div>

                                {/* first-name box */}
                                <div id="first_name" className="clearfix large_form">
                                    <label htmlFor="first_name" className="label icon-field">
                                        <i className="icon-login icon-user"></i>
                                    </label>
                                    <input onkeyup="this.value=this.value.replace(/[^a-z,0-9]/g,'');" type="text"
                                        name="customer[first_name]" placeholder="Tên" id="first_name" className="text" size="30" />
                                </div>

                                {/* phone box */}
                                <div id="phone" className="clearfix large_form">
                                    <label htmlFor="phone" className="label icon-field">
                                        <i className="icon-login icon-phone"></i>
                                    </label>
                                    <input required onkeyup="this.value=this.value.replace(/[^a-z,0-9]/g,'');" type="text"
                                        name="customer[phone]" placeholder="Số điện thoại" id="phone" className="text" size="30" />
                                </div>

                                {/* password box */}
                                <div className="clearfix large_form">
                                    <label htmlFor="customer_password" className="icon-field">
                                        <i className="icon-login icon-shield"></i>
                                    </label>
                                    <input required type="password" name="customer[password]"
                                        id="customer_password" placeholder="Mật khẩu" className="text" size="16" />
                                </div>

                                {/* button  */}
                                <div className="clearfix action_account_customer">
                                    <div className="action_bottom button dark">
                                        <input type="submit" className="btn btn-signin" value="Đăng ký" />
                                    </div>
                                </div>
                                <div className="clearfix req_pass">
                                    <Link to="/" className="comeback">
                                        <i className="fa fa-long-arrow-left"></i> Quay lại trang chủ
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Register;
