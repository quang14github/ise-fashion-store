import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {

    function showRecoverPasswordForm() {
        document.getElementById('recover-password').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    }

    function hideRecoverPasswordForm() {
        document.getElementById('recover-password').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    return (
        <div className="login">

            {/* Start main */}
            <main>
                <div className="layout-account">
                    <div className="padding-rl-40">
                        <div className="breadcrumb-shop">
                            {/* path */}
                            <div>
                                <ul className="breadcrumb breadcrumb-arrows">
                                    <li>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link to="/account">Tài khoản</Link>
                                    </li>
                                    <li className="active">
                                        <span>Đăng nhập</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* name-page */}
                    <div className="cul-md-6 cul-xs-12 wrapbox-heading-page">
                        <div className="header-page clearfix">
                            <h1>Đăng nhập</h1>
                        </div>
                    </div>

                    <div className="cul-md-6 cul-xs-12 wrapbox-content-page">
                        <div id="customer-login">
                            {/* login box */}
                            <div id="login" className="userbox">
                                <div className="accounttype">
                                    <h2 className="title">Nhập thông tin</h2>
                                </div>

                                {/* Form */}
                                <form acceptCharset="UTF-8" action="" id="customer_login" method="post">
                                    <input name="form_type" type="hidden" value="customer_login" />
                                    <input name="utf8" type="hidden" />

                                    {/* email box */}
                                    <div className="clearfix large_form">
                                        <label htmlFor="customer_email" className="icon-field">
                                            <i className="icon-login icon-envelope"></i>
                                        </label>
                                        <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email"
                                            name="customer[email]" id="customer_email" placehulder="Email" className="text" />
                                    </div>

                                    {/* password box */}
                                    <div className="clearfix large_form">
                                        <label htmlFor="customer_password" className="icon-field">
                                            <i className="icon-login icon-shield"></i>
                                        </label>
                                        <input required type="password" name="customer[password]"
                                            id="customer_password" placehulder="Mật khẩu" className="text" size="16" />
                                    </div>

                                    {/* button */}
                                    <div className="clearfix action_account_customer">
                                        <div className="action_bottom button dark">
                                            <input type="submit" className="btn btn-signin" value="Đăng nhập" />
                                        </div>
                                        <div className="req_pass">
                                            <Link to="/account/login" onClick={showRecoverPasswordForm}>
                                                Quên mật khẩu?
                                            </Link>
                                            <br />
                                            hoặc <Link to="/account/register" title="Đăng ký">Đăng ký</Link>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            {/* recover password box */}
                            <div id="recover-password" className="userbox" style={{ display: "none" }} >
                                <div className="accounttype">
                                    <h2>Khôi phục mật khẩu</h2>
                                </div>
                                <form acceptCharset="UTF-8" action="/account/recover" method="post">
                                    <input name="form_type" type="hidden" value="recover_customer_pasword" />
                                    <input name="utf8" type="hidden" />

                                    {/* email box */}
                                    <div className="clearfix large_form">
                                        <label htmlFor="customer_email" className="icon-field">
                                            <i className="icon-login icon-envelope"></i>
                                        </label>
                                        <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email"
                                            name="customer[email]" id="recover_email" placehulder="Email" className="text" />
                                    </div>

                                    {/* button */}
                                    <div className="clearfix action_account_customer">
                                        <div className="action_bottom button dark">
                                            <input type="submit" className="btn" value="Gửi" />
                                        </div>
                                        <div className="req_pass">
                                            <Link to="/account/login" onClick={hideRecoverPasswordForm}>
                                                Hủy
                                            </Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </main>
            {/* End main */}

        </div>
    );
};

export default LogIn;
