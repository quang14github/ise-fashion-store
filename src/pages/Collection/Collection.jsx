import React from "react";

const Collection = () => {
  return (
    <div id="collection" className="collection-page">
      <div className="padding-rl-40">
        <div className="main-content">
          <div className=" banner-collection-header"></div>
          <div id="collection-body" className="wrap-collection-body clearfix">
            <div className="wrap-collection-title">
              <div className="heading-collection">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <h1 className="titlePageAll">
                    <span>Sản phẩm</span>
                    <span className="visible-xs arrowToggle">
                      <i className="fa fa-sort-down"></i>
                    </span>
                  </h1>
                  <ul className="menuCollection">
                    <li>
                      <a href="/collections/dam">Đầm </a>
                    </li>
                    <li>
                      <a href="/collections/ao">Áo </a>
                    </li>
                    <li>
                      <a href="/collections/ao-so-mi">Áo sơ mi </a>
                    </li>
                    <li>
                      <a href="/collections/ao-kieu">Áo Kiểu </a>
                    </li>
                    <li>
                      <a href="/collections/jumpsuit">Jumpsuit </a>
                    </li>
                    <li>
                      <a href="/collections/chan-vay">Chân váy </a>
                    </li>
                    <li>
                      <a href="/collections/quan">Quần </a>
                    </li>
                    <li>
                      <a href="/collections/homewear">Homewear </a>
                    </li>
                    <li>
                      <a
                        className="filter--active"
                        href="/collections/san-pham"
                      >
                        Tất cả sản phẩm{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="filter-custom">
                    <div className="append-search"></div>
                    <span>Bộ lọc:</span>
                    <div className="group-filter" aria-expanded="true">
                      <div className="layered_subtitle dropdown-filter">
                        <span>Size</span>
                        <span className="icon-control">
                          <i className="fa fa-sort-down"></i>
                        </span>
                      </div>
                      <div className="layered-content filter-size s-filter">
                        <ul className="check-box-list clearfix">
                          <li>
                            <input
                              type="checkbox"
                              id="data-size-p1"
                              value="S"
                              name="size-filter"
                              data-size="(variant:product**S)"
                            />
                            <label for="data-size-p1">
                              <span className="button"></span>S
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="data-size-p2"
                              value="M"
                              name="size-filter"
                              data-size="(variant:product**M)"
                            />
                            <label for="data-size-p2">
                              <span className="button"></span>M
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="data-size-p3"
                              value="L"
                              name="size-filter"
                              data-size="(variant:product**L)"
                            />
                            <label for="data-size-p3">
                              <span className="button"></span>L
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="data-size-p4"
                              value="XL"
                              name="size-filter"
                              data-size="(variant:product**XL)"
                            />
                            <label for="data-size-p4">
                              <span className="button"></span>
                              XL
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="group-filter" aria-expanded="true">
                      <div className="layered_subtitle dropdown-filter">
                        <span>Giá sản phẩm</span>
                        <span className="icon-control">
                          <i className="fa fa-sort-down"></i>
                        </span>
                      </div>
                      <div className="layered-content bl-filter filter-price">
                        <ul className="check-box-list clearfix">
                          <li>
                            <input
                              type="checkbox"
                              id="p1"
                              data-text="Dưới 500,000đ"
                              name="price-filter"
                              data-price="(price:product<=500000)"
                            />
                            <label for="p1">
                              <span className="button"></span>
                              <span>Dưới</span> 500,000đ
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="p2"
                              data-text="500,000đ - 1,000,000đ"
                              name="price-filter"
                              data-price="((price:product>500000)&amp;&amp;(price:product<=1000000))"
                            />
                            <label for="p2">
                              <span className="button"></span>
                              500,000đ - 1,000,000đ
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="p3"
                              data-text="1,000,000đ - 1,500,000đ"
                              name="price-filter"
                              data-price="((price:product>1000000)&amp;&amp;(price:product<=1500000))"
                            />
                            <label for="p3">
                              <span className="button"></span>
                              1,000,000đ - 1,500,000đ
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="p4"
                              data-text="1,500,000đ - 2,000,000đ"
                              name="price-filter"
                              data-price="((price:product>1500000)&amp;&amp;(price:product<=2000000))"
                            />
                            <label for="p4">
                              <span className="button"></span>
                              1,500,000đ - 2,000,000đ
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="p5"
                              data-text="Trên 2,000,000đ"
                              name="price-filter"
                              data-price="(price:product>=2000000)"
                            />
                            <label for="p5">
                              <span className="button"></span>
                              <span>Trên</span> 2,000,000đ
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="group-filter" aria-expanded="true">
                      <div className="layered_subtitle dropdown-filter">
                        <span>Màu sắc</span>
                        <span className="icon-control">
                          <i className="fa fa-sort-down"></i>
                        </span>
                      </div>
                      <div className="layered-content filter-color s-filter">
                        <ul className="check-box-list">
                          <li>
                            <input
                              type="checkbox"
                              id="color1"
                              value="Hồng"
                              name="color-filter"
                              data-color="(variant:product**Hồng)"
                            />
                            <label
                              style={{ backgroundColor: "#ef5777" }}
                              for="color1"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color2"
                              value="Vàng"
                              name="color-filter"
                              data-color="(variant:product**Vàng)"
                            />
                            <label
                              style={{ backgroundColor: "#ffd32a" }}
                              for="color2"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color3"
                              value="Xám"
                              name="color-filter"
                              data-color="(variant:product**Xám)"
                            />
                            <label
                              style={{ backgroundColor: "#d2dae2" }}
                              for="color3"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color4"
                              value="Xanh"
                              name="color-filter"
                              data-color="(variant:product**Xanh)"
                            />
                            <label
                              style={{ backgroundColor: "#3c40c6" }}
                              for="color4"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color5"
                              value="Xanh lá"
                              name="color-filter"
                              data-color="(variant:product**Xanh lá)"
                            />
                            <label
                              style={{ backgroundColor: "#0be881" }}
                              for="color5"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color6"
                              value="Sen"
                              name="color-filter"
                              data-color="(variant:product**Sen)"
                            />
                            <label
                              style={{ backgroundColor: "#f53b57" }}
                              for="color6"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color7"
                              value="Xanh biển"
                              name="color-filter"
                              data-color="(variant:product**Xanh biển)"
                            />
                            <label
                              style={{ backgroundColor: "#0fbcf9" }}
                              for="color7"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color8"
                              value="Đen"
                              name="color-filter"
                              data-color="(variant:product**Đen)"
                            />
                            <label
                              style={{ backgroundColor: "#000000" }}
                              for="color8"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color9"
                              value="Trắng"
                              name="color-filter"
                              data-color="(variant:product**Trắng)"
                            />
                            <label
                              style={{ backgroundColor: "#ffffff" }}
                              for="color9"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="color10"
                              value="Đỏ"
                              name="color-filter"
                              data-color="(variant:product**Đỏ)"
                            />
                            <label
                              style={{ backgroundColor: "#ff3f34" }}
                              for="color10"
                            >
                              <span className="button"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear-fix filter-here">
              <div className="alert-no-filter"></div>
              <div className="bigProductNoFilter content-product-list product-list filter clearfix">
                <div className="row">
                  <div className="width50 col-md-3 col-sm-6 col-xs-6 pro-loop animated zoomIn 1">
                    <div className="product-block">
                      <div className="product-img">
                        <div className="labelTagProduct">
                          <img
                            src="https://file.hstatic.net/200000000133/file/label_50_816265e4046f4d989d40e129242ebebc.png"
                            alt="label "
                          />
                        </div>

                        <a
                          href="/products/chan-vay-midi-xep-ly-22acve036x1"
                          title="Chân váy Midi, Xếp ly 22ACVE036X1"
                          className="image-resize"
                        >
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcset="//product.hstatic.net/200000000133/product/22aote035x_-_22acve036x_b_76307b4d6e4a472a8b0bf9035aa4f8fb_grande.jpg"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcset="//product.hstatic.net/200000000133/product/22aote035x_-_22acve036x_b_76307b4d6e4a472a8b0bf9035aa4f8fb_master.jpg"
                            />
                            <img
                              className="img-loop"
                              alt=" Chân váy Midi, Xếp ly 22ACVE036X1 "
                              src="//product.hstatic.net/200000000133/product/22aote035x_-_22acve036x_b_76307b4d6e4a472a8b0bf9035aa4f8fb_master.jpg"
                            />
                          </picture>
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcset="//product.hstatic.net/200000000133/product/22aote035x_-_22acve036x_a_a351d9367eaf4b758ebb1c587c8ad457_grande.jpg"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcset="//product.hstatic.net/200000000133/product/22aote035x_-_22acve036x_a_a351d9367eaf4b758ebb1c587c8ad457_master.jpg"
                            />
                            <img
                              className="img-loop img-hover"
                              alt=" Chân váy Midi, Xếp ly 22ACVE036X1 "
                              src="//product.hstatic.net/200000000133/product/22aote035x_-_22acve036x_a_a351d9367eaf4b758ebb1c587c8ad457_master.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="product-detail clearfix">
                        <div className="box-pro-detail">
                          <h3 className="pro-name">
                            <a
                              href="/products/chan-vay-midi-xep-ly-22acve036x1"
                              title="Chân váy Midi, Xếp ly 22ACVE036X1"
                            >
                              Chân váy Midi, Xếp ly 22ACVE036X1
                            </a>
                          </h3>
                          <div className="box-pro-prices">
                            <p className="pro-price highlight">
                              <span>599,500đ</span>
                              <span className="pro-price-del">
                                <del className="compare-price">1,199,000đ</del>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input
          type="text"
          className="hidden"
          id="coll-handle"
          value="(collectionid:product=1002349342)"
        />
        <input
          type="text"
          className="hidden"
          id="coll-url"
          value="/collections/san-pham"
        />
      </div>
    </div>
  );
};

export default Collection;
