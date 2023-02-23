import { Link } from "react-router-dom";
import './Cart.css';
import React, {useState, useEffect} from "react";

const Cart = () => {
    // const listProduct = [
    //     {
    //         imgURL: ' //product.hstatic.net/200000000133/product/23svao003v_-_23sawe003t_-_23svjo003v_b_58b6f7174c7d49e9ab4df23db12aca29_medium.jpg',
    //         name: 'Váy trong bộ Vest-Váy,  23SVJO003V',
    //         variant: 'Tím / M / Tuýt si',
    //         price: 700000,
    //         count: 1
    //     },
    //     {
    //         imgURL: ' //product.hstatic.net/200000000133/product/23svao003v_-_23sawe003t_-_23svjo003v_b_58b6f7174c7d49e9ab4df23db12aca29_medium.jpg',
    //         name: 'Váy trong bộ Vest-Váy,  23SVJO003V',
    //         variant: 'Tím / M / Tuýt si',
    //         price: 800000,
    //         count: 1
    //     },
    //     {
    //         imgURL: ' //product.hstatic.net/200000000133/product/23svao003v_-_23sawe003t_-_23svjo003v_b_58b6f7174c7d49e9ab4df23db12aca29_medium.jpg',
    //         name: 'Váy trong bộ Vest-Váy,  23SVJO003V',
    //         variant: 'Tím / M / Tuýt si',
    //         price: 500000,
    //         count: 1
    //     }
    // ]
    const [lists, setLists] = useState([]);
    //call API
    useEffect(()=>{
        fetch('http://localhost:3000/db.json')
            .then(res =>res.json())
            .then((result)=>{
                //copy item to listProduct
                // set State
                setLists(result);
            })
    },[])
    
    const listProduct = [...lists];

    function addProduct(index){
        listProduct[index].count +=1; 
        setLists(listProduct);
    }

    function removeProduct(index){
        if (listProduct[index].count === 0) return;
        else{
            listProduct[index].count -= 1; 
            setLists(listProduct);
        }
    }

    var total = 0;
    for (var product of listProduct){
        total += product.price * product.count;
    }

    function payment(){
        alert("Thanh toan thanh cong!")
        setLists([]);
    }

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

            <div hidden className="padding-rl-40 wrap-content-cart span12 expanded-message text-center" style={{ margin: "80px auto" }} >
                Giỏ hàng của bạn đang trống
                <p className="link-continue">
                    <Link to="/collection/all" className="button dark">
                        <i className="fa fa-reply"></i> Tiếp tục mua hàng
                    </Link>
                </p>
            </div>

            <div style={{ display: "block" }} className="padding-rl-40 wrapbox-content-cart cart-container cart-col-left main-content-cart">
                <form id="cartformpage">
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

                            {/* mapping sản phẩm */}

                            

                                {lists.map((product, index )=> (
                                    <tr key={product.index} class="line-item-container" data-inventory="18" data-variant-id="1093561953">
                                        <td class="remove text-center hidden-xs">
                                            {/* <a>
                                                <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                                                    <g>
                                                        <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"></path>
                                                    </g>
                                                </svg>
                                            </a> */}
                                        </td>
                                        <td class="image text-center">
                                            <div class="product_image_cart">
                                                <a href="/products/vay-trong-bo-vest-vay-23svjo003v">
                                                    <img src={product.imgURL} alt="Váy trong bộ Vest-Váy,  23SVJO003V"/>
                                                </a>
                                                <p class="visible-xs">
                                                    <a class="btnDeleteCart" href="/cart/change?line=1&amp;quantity=0">
                                                        Xóa
                                                    </a>
                                                </p>
                                            </div>
                                        </td>
                                        <td class="tableName">
                                            <span class="nameInCart">
                                                <a href="/products/vay-trong-bo-vest-vay-23svjo003v">
                                                    <h3>{product.name}</h3>
                                                </a>
                                                <p class="variant">
                                                    <span class="variant_title">{product.variant}</span>
                                                </p>
                                            </span>
                                            <div class="visible-xs">
                                                <p>
                                                    <span>{product.price}</span>
                                                </p>
                                                <p class="visible-xs">
                                                    Thành tiền: <span class="line-item-total">{product.price*product.count}d</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td class="price text-center priceLine hidden-xs">
                                            <p>
                                                <span>{product.price}</span>
                                            </p>
                                        </td>
                                        <td class="qty text-center">
                                            <div class="qty quantity-partent qty-click clearfix">
                                                <button onClick={()=>removeProduct(index)} type="button" class="qtyminus qty-btn" >-</button>
                                                <input readonly="" type="text" size="4" name="updates[]" min="1" id="updates_1093561953" value={product.count} class="tc line-item-qty item-quantity"/>
                        
                                                <button onClick={() => addProduct(index)} type="button" class="qtyplus qty-btn" >+</button>
                                            </div>
                                        </td>
                                        <td class="total text-center hidden-xs">
                                            <p class="price">
                                                <span class="line-item-total">
                                                {product.price*product.count}
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                ))

                                }
                            


                        </table>
                        
                        <p class="order-infor">					
							Tổng cộng:
							<span class="total_price"><b>{total}đ</b></span>
						</p>

                        <div class="cart-buttons">
							<button onClick={payment} type="submit" id="checkout" class="checkLimitCart btnStyle" name="checkout">Thanh toán</button>
						</div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cart;