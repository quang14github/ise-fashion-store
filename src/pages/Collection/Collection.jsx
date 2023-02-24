import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mockData from "../../mock/product/product";
const catgoryList = [
  { name: "Áo", id: "shirt" },
  { name: "Quần", id: "pant" },
  { name: "Váy", id: "dress" },
  { name: "Tất cả sản phẩm", id: "all" },
];
const Collection = () => {
  const [productList, setProductList] = useState(mockData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const fetchData = (selectedCategory) => {
  //   try {
  //     fetch("localhost:8080/item/category/" + selectedCategory)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setProductList(data);
  //       });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(selectedCategory);
  // }, [selectedCategory]);
  const handleCatgoryClick = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.id);
    setProductList(
      mockData.filter(
        (product) => product.category === e.target.id || e.target.id === "all"
      )
    );
  };
  const catgoryListGen = catgoryList.map((catgory) => (
    <li>
      <a href="" id={catgory.id} onClick={handleCatgoryClick}>
        {catgory.name}
      </a>
    </li>
  ));
  const productListGen = productList.map((product) => (
    <div class="col-md-3 col-sm-6 col-xs-6 pro-loop animated zoomIn">
      <div class="product-block">
        <div class="product-img">
          {/* <div class="label-sale">-70%</div> */}

          <Link
            to={`${product.productId}`}
            title={product.name}
            class="image-resize"
          >
            <img
              class="img-loop"
              alt={product.name}
              src={product.detailImages[0]}
            />
          </Link>
        </div>
        <div class="product-detail clearfix">
          <div class="box-pro-detail">
            <h3 class="pro-name">
              <Link to={`${product.productId}`} title={product.name}>
                {product.name}
              </Link>
            </h3>
            <div class="box-pro-prices">
              <p class="pro-price highlight">
                <span>{product.price}</span>
                <span class="pro-price-del">
                  <del class="compare-price">{product.ogPrice}</del>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  ));
  return (
    <div id="collection" className="collection-page">
      <div className="padding-rl-40">
        <div className="main-content">
          <div class="breadcrumb-shop">
            <div
              class=""
              itemscope=""
              itemtype="http://data-vocabulary.org/Breadcrumb"
            >
              <ol class="breadcrumb breadcrumb-arrows">
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li class="active">
                  <span>Sản phẩm</span>
                </li>
              </ol>
            </div>{" "}
          </div>
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
                  <ul className="menuCollection">{catgoryListGen}</ul>
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
                <div className="row">{productListGen}</div>
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
