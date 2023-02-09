import React from "react";
const color = "#ff0000";
const Navbar = () => {
  return (
    <div class="fix-position padding-lr-0 hidden-xs hidden-sm hidden-md col-lg-7">
      <div class="main-menu hidden-xs hidden-sm hidden-md">
        <div id="nav">
          <nav class="main-nav">
            <ul class="clearfix">
              <li class=" ">
                <a href="/collections/hang-moi-ve-2022" title="Hàng mới về">
                  Hàng mới về
                </a>
              </li>
              <li class=" ">
                <a href="/collections/hang-ban-chay" title="Hàng bán chạy">
                  Hàng bán chạy
                </a>
              </li>
              <li class="  hasMegamenu">
                <a href="/collections/san-pham" title="Sản phẩm">
                  Sản phẩm
                </a>
              </li>
              <li class=" ">
                <a
                  href="/collections/san-pham-unique"
                  title="Unique Collection"
                >
                  Unique Collection
                </a>
              </li>
              <li class=" ">
                <a href="/pages/campaign" title="Bộ sưu tập">
                  Bộ sưu tập
                </a>
              </li>
              <li class="  ">
                <a href="/collections/phu-kien" title="Phụ kiện">
                  Phụ kiện
                </a>
                <ul class="sub_menu">
                  <li class="">
                    <a href="/collections/tui-xach" title="Túi xách">
                      Túi xách
                    </a>
                  </li>
                  <li class="">
                    <a href="/collections/giay" title="Giày">
                      Giày
                    </a>
                  </li>
                  <li class="">
                    <a href="/collections/phu-kien-khac" title="Cài áo">
                      Cài áo
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a href="/collections/homewear" title="Homewear">
                  Homewear
                </a>
              </li>
              <li class=" ">
                <a href="/collections/do-lot" title="ĐỒ LÓT">
                  ĐỒ LÓT
                </a>
              </li>
              <li class=" ">
                <a href="/collections/lady-me" title="LADY ME">
                  LADY ME
                </a>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
