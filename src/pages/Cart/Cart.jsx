import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="layout-cart">
            <div className="padding-rl-40 breadcrumb-shop">
                {/* path */}
                <div>
                    <ul className="breadcrumb breadcrumb-arrows">
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="active">
                            <Link to="/cart">Giỏ hàng</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="padding-rl-40 wrap-content-cart span12 expanded-message text-center" style={{ margin: "80px auto" }} >
                Giỏ hàng của bạn đang trống
                <p className="link-continue">
                    <Link to="/collection/all" className="button dark">
                        <i className="fa fa-reply"></i> Tiếp tục mua hàng
                    </Link>
                </p>
            </div>

            <div style={{ display: "none" }} className="padding-rl-40 wrapbox-content-cart cart-container cart-col-left main-content-cart">
                <form action="/cart" method="post" id="cartformpage">
                    <div id="cart" className="row col-md-12 col-sm-12 col-xs-12">
                        <table className="table-cart">
                            <thead className="hidden-xs">
                                <tr>
                                    <th className="remove tableDelete">
                                        <span></span>
                                    </th>
                                    <th className="image tableImage">
                                        <span>Hình ảnh</span>
                                    </th>
                                    <th className="tableName">
                                        <span>Sản phẩm</span>
                                    </th>
                                    <th className="price tablePrice">
                                        <span>Giá</span>
                                    </th>
                                    <th className="qty tableQuantity">
                                        <span>Số lượng</span>
                                    </th>
                                    <th className="total tableTotal">
                                        <span></span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody id="ajax-gift">
                                <tr className="line-item-container" data-inventory="14" data-variant-id="1079279607">
                                    <td className="remove text-center hidden-xs"></td>
                                    <td className="image text-center"></td>
                                    <td className="tableName"></td>
                                    <td className="price text-center priceLine hidden-xs"></td>
                                    <td className="qty text-center"></td>
                                    <td className="total text-center hidden-xs"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cart;