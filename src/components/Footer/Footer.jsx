import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="sectionFooter" className="clear-fix">
      <div className="padding-rl-40">
        <div className="innerFooter">
          <div className="col-xs-12 col-footer-two">
            <div className="innerMenuFooter">
              <h4>
                Tuyển dụng
                <i className=""></i>
              </h4>
              <ul>
                <li>
                  <a
                    href="https://evadeeva.com.vn/blogs/tuyen-dung/tuyen-dung-evadeeva"
                    title="Tuyển dụng Tháng 12.2022"
                  >
                    Tuyển dụng Tháng 12.2022
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-footer-two">
            <div className="innerMenuFooter">
              <h4>Khám phá EDE</h4>
              <ul>
                <li>
                  <a href="/pages/ve-chung-toi" title="Về chúng tôi">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/cau-hoi-thuong-gap"
                    title="Câu hỏi thường gặp"
                  >
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="/blogs/tin-tuc" title="Tin Tức">
                    Tin Tức
                  </a>
                </li>
                <li>
                  <a href="/blogs/bai-viet-noi-bat" title="Sự kiện">
                    Sự kiện
                  </a>
                </li>
                <li>
                  <a href="/blogs/sao-eva" title="SAO &amp; Eva">
                    SAO &amp; Eva
                  </a>
                </li>
                <li>
                  <a href="/blogs/mix-match" title="Mix &amp; Match">
                    Mix &amp; Match
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-footer-two">
            <div className="innerMenuFooter">
              <h4>Chính sách</h4>
              <ul>
                <li>
                  <a
                    href="/pages/chinh-sach-thanh-toan"
                    title="Chính sách thanh toán"
                  >
                    Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/chinh-sach-van-chuyen"
                    title="Chính sách vận chuyển"
                  >
                    Chính sách vận chuyển
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/chinh-sach-bao-mat"
                    title="Chính sách bảo mật"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/chuong-trinh-the-vip"
                    title="Chương trình thẻ VIP"
                  >
                    Chương trình thẻ VIP
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/huong-dan-chon-size"
                    title="Hướng dẫn chọn size"
                  >
                    Hướng dẫn chọn size
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-footer-three">
            <div className="innerMenuFooter">
              <div className="footer-signup">
                <div className="footer-signup-inner">
                  <h4 className="no-click">
                    ĐĂNG KÝ NHẬN TIN TỨC VÀ ƯU ĐÃI CỦA EDE
                  </h4>
                  <div className="contentSubscribe">
                    <p>
                      Bằng cách đăng ký, bạn đồng ý với{" "}
                      <a href="/pages/chinh-sach-bao-mat">chính sách bảo mật</a>{" "}
                      của chúng tôi.
                    </p>
                    <form
                      acceptCharset="UTF-8"
                      action="/account"
                      id="create_customer"
                      method="post"
                    >
                      <input
                        name="form_type"
                        type="hidden"
                        value="create_customer"
                      />
                      <input name="utf8" type="hidden" value="✓" />
                      <input name="form_type" type="hidden" value="customer" />
                      <input name="utf8" type="hidden" value="✓" />
                      <input
                        type="hidden"
                        name="customer[accepts_marketing]"
                        value="on"
                      />
                      <input
                        type="hidden"
                        id="contact_tags"
                        name="customer[tags]"
                        value="khách hàng tiềm năng,Bản tin"
                      />
                      <input
                        type="hidden"
                        id="newsletter-first-name"
                        name="contact[first_name]"
                        value="Người đăng ký"
                      />
                      <input
                        type="hidden"
                        id="newsletter-last-name"
                        name="contact[last_name]"
                        value=""
                      />
                      <div className="newsletter-form">
                        <input
                          required=""
                          type="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                          name="contact[email]"
                          id="emailSubscribe"
                          className="newsletter-input form-control input-lg"
                        />
                        <label htmlFor="email" className="f-input-placeholder">
                          Nhập email của bạn
                        </label>
                        <button className="btn-newsletter" type="submit">
                          <i className="fa fa-chevron-right"></i>
                        </button>
                      </div>
                      <input
                        id="4346eb5614a74a75b5334f4199b8cdad"
                        name="g-recaptcha-response"
                        type="hidden"
                        value="03AFY_a8Va4Nk0t9c-T9BBybmiMCAbHf98mQoognlLpSEODbfoGfwG2TK0eRxofJnhSbfJMwjezYVUtLQ3Mh7rrfVwAhggtOPc8kQ4VCphveFRDcVinfQ3AoiTEEjjiiuDCogzC6AcPKyQTtnL1uLfp0IexWIY74bEDBIIhcykF0D32ZZjvz_e_zeoAGUTOh4Z8Wa8RRPWAl9sk2jkvLDWBa8zVn6ediNDTEOwGEMPuBX3fEg1kkKAIyMUv5cBC65Wq3GJHzjsuKuplzMo5GJfe1gY88-MpJ-WVIWdolOCYAzDBiOZtyAy0S5c-sr4o706VhXbXAgxbz59ON5BaOcmMrbmU0AaPurYg8zsuYyLtLV8QWIUPoQyivn9_RiAQIcH3eqQ64fqtYOeu0dB8Q1pLd6xGww5RE-2vS886_VtOkB2AocoP25MNaRhb1p8tMqaL7gZ494bYBfQvZq4SrlN2rAtFD-3lTxlcBpDk_Ebz2WEua5J72kKnrA1FtCJBrt-64BklY2G7CatYzhwZC4wRM-_ik8_8qkrK_vMiAoMEZg-KwC0kEo8YbDOfu5dHladMsKEUoBXRxGo"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
