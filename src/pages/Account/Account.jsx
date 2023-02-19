import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
    return (

        <div className="layout-info-account">
            <div className="padding-rl-40 breadcrumb-shop">
                {/* path */}
                <div itemScope itemType="">
                    <ol className="breadcrumb breadcrumb-arrows">
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/account">Tài khoản</Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="title-infor-account text-center">
                <h1>Tài khoản của bạn</h1>
            </div>

            <div className="container">
                <div className="row col-xs-12 col-sm-9">
                    <div className="row col-xs-12" id="customer_sidebar">
                        <p className="title-detail">Thông tin tài khoản</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Account;