import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <main>
            <div className="layout-info-account">
                <div className="padding-rl-40">
                    <div className="breadcrumb-shop">
                        <div itemScope itemType="">
                            {/* path */}
                            <div>
                                <ul className="breadcrumb breadcrumb-arrows">
                                    <li>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link to="/account">Tài khoản</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-infor-account text-center">
                    <h1>Tài khoản của bạn</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3 sidebar-account"></div>
                        <div className="col-xs-12 col-sm-9">
                            <div className="row">
                                <div className="col-xs-12" id="customer_sidebar">
                                    <p className="title-detail">Thông tin tài khoản</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Account;