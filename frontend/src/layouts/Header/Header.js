import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { getCategory } from "../../redux/actions/categoryActions";

export default function Header() {
  const dispatch = useDispatch();
  const lstCate = useSelector((state) => state.category.categories);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            <div className="mail-service">
              <i className=" fa fa-envelope"></i>
              therichposts@gmail.com
            </div>
            <div className="phone-service">
              <i className=" fa fa-phone"></i>
              +00 00.000.000
            </div>
          </div>
          <div className="ht-right">
            {localStorage.getItem("userInfo") ? (
              <Link to="/" className="login-panel">
                <i className="fa fa-user"></i>
                {JSON.parse(localStorage.getItem("userInfo")).lastName}
              </Link>
            ) : (
              <Link to="/login" className="login-panel">
                <i className="fa fa-user"></i>Login
              </Link>
            )}
            {/* <Link to="/login" className="login-panel">
              <i className="fa fa-user"></i>Login
            </Link> */}
            <div className="top-social">
              <a href="/#">
                <i className="ti-facebook"></i>
              </a>
              <a href="/#">
                <i className="ti-twitter-alt"></i>
              </a>
              <a href="/#">
                <i className="ti-linkedin"></i>
              </a>
              <a href="/#">
                <i className="ti-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-header">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="logo">
                <a href="/">
                  <img src="assets/img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="advanced-search">
                <button type="button" className="category-btn">
                  Danh mục
                </button>
                <div className="input-group">
                  <input type="text" placeholder="Bạn cần tìm gì?" />
                  <button type="button">
                    <i className="ti-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-right col-md-3">
              <ul className="nav-right">
                <li className="heart-icon">
                  <a href="/#">
                    <i className="icon_heart_alt"></i>
                    <span>1</span>
                  </a>
                </li>
                <li className="cart-icon">
                  <a href="/cart">
                    <i className="icon_bag_alt"></i>
                    <span>3</span>
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          <tr>
                            <td className="si-pic">
                              <img
                                src="assets/img/select-product-1.jpg"
                                alt=""
                              />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close"></i>
                            </td>
                          </tr>
                          <tr>
                            <td className="si-pic">
                              <img
                                src="assets/img/select-product-2.jpg"
                                alt=""
                              />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="select-total">
                      <span>total:</span>
                      <h5>$120.00</h5>
                    </div>
                    <div className="select-button">
                      <a href="/#" className="primary-btn view-card">
                        VIEW CARD
                      </a>
                      <a href="/#" className="primary-btn checkout-btn">
                        CHECK OUT
                      </a>
                    </div>
                  </div>
                </li>
                <li className="cart-price">$150.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Nav listCate={lstCate} />
    </header>
  );
}
