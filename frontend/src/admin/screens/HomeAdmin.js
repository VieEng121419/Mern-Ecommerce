import React, { useEffect } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Content from "../layouts/Content/Content";
import Footer from "../layouts/Footer/Footer";
import Category from "./CategoryScreen";
import User from "./UsersScreen";
import Product from "./ProductsScreen";

export default function HomeAdmin() {
  let { path, url } = useRouteMatch();
  const animateSidabar = () => {
    const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
    const mainWrapper = document.querySelector(".main-wrapper");
    const menuToggleButton = document.querySelector("#menu-toggle");
    const menuToggleButtonIcon = document.querySelector("#menu-toggle i");

    menuToggleButton.addEventListener("click", () => {
      sidebarNavWrapper.classList.toggle("active");
      mainWrapper.classList.toggle("active");

      if (document.body.clientWidth > 1200) {
        if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
          menuToggleButtonIcon.classList.remove("lni-chevron-left");
          menuToggleButtonIcon.classList.add("lni-menu");
        } else {
          menuToggleButtonIcon.classList.remove("lni-menu");
          menuToggleButtonIcon.classList.add("lni-chevron-left");
        }
      } else {
        if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
          menuToggleButtonIcon.classList.remove("lni-chevron-left");
          menuToggleButtonIcon.classList.add("lni-menu");
        }
      }
    });
  };
  useEffect(() => {
    animateSidabar();
  }, []);
  return (
    <div>
      <aside className="sidebar-nav-wrapper">
        <div className="navbar-logo">
          <a href="/admin">
            <img src="admin/assets/images/logo/logo.svg" alt="logo" />
          </a>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item__admin">
              <Link to={`${url}`}>
                <span className="icon">
                  <i className="lni lni-alarm" />
                </span>
                <span className="text">Trang chủ</span>
              </Link>
            </li>
            <li className="nav-item__admin nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_2"
                aria-controls="ddmenu_2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="lni lni-layout" />
                </span>
                <span className="text">Sản phẩm</span>
              </a>
              <ul id="ddmenu_2" className="collapse dropdown-nav">
                <li>
                  <Link to={`${url}/products`}>
                    <i className="lni lni-arrow-right" /> Quản lý sản phẩm
                  </Link>
                </li>
                <li>
                  <a href="blank-page.html">
                    <i className="lni lni-arrow-right" /> Quản lý màu
                  </a>
                </li>
                <li>
                  <a href="blank-page.html">
                    <i className="lni lni-arrow-right" /> Quản lý size
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item__admin nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_3"
                aria-controls="ddmenu_3"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="lni lni-layout" />
                </span>
                <span className="text">Danh mục</span>
              </a>
              <ul id="ddmenu_3" className="collapse dropdown-nav">
                <li>
                  <Link to={`${url}/categories`}>
                    <i className="lni lni-arrow-right" /> Quản lý danh mục
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item__admin nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_4"
                aria-controls="ddmenu_4"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="lni lni-layout" />
                </span>
                <span className="text">Tài khoản </span>
              </a>
              <ul id="ddmenu_4" className="collapse dropdown-nav">
                <li>
                  <Link to={`${url}/users`}>
                    <i className="lni lni-arrow-right" /> Quản lý tài khoản
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item__admin nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_55"
                aria-controls="ddmenu_55"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="lni lni-layout" />
                </span>
                <span className="text">Chủ đề</span>
              </a>
              <ul id="ddmenu_55" className="collapse dropdown-nav">
                <li>
                  <a href="icons.html">
                    <i className="lni lni-arrow-right" /> Quản lý chủ đề
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item__admin nav-item-has-children">
              <a
                href="#0"
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#ddmenu_5"
                aria-controls="ddmenu_5"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon">
                  <i className="lni lni-check-box" />
                </span>
                <span className="text"> Đơn hàng </span>
              </a>
              <ul id="ddmenu_5" className="collapse dropdown-nav">
                <li>
                  <a href="form-elements.html">
                    <i className="lni lni-arrow-right" /> Quản lý đơn hàng
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item__admin">
              <a href="tables.html">
                <span className="icon">
                  <i className="lni lni-grid-alt" />
                </span>
                <span className="text">Tables</span>
              </a>
            </li>
            <span className="divider">
              <hr />
            </span>
            <li className="nav-item__admin">
              <a href="notification.html">
                <span className="icon">
                  <i className="lni lni-alarm" />
                </span>
                <span className="text">Notifications</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-wrapper">
        <header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-6">
                <div className="header-left d-flex align-items-center">
                  <div className="menu-toggle-btn mr-20">
                    <button
                      id="menu-toggle"
                      className="main-btn primary-btn btn-hover"
                    >
                      <i className="lni lni-chevron-left me-2" /> Danh mục
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-6">
                <div className="header-right">
                  {/* notification start */}
                  <div className="notification-box ml-15 d-none d-md-flex">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="notification"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="lni lni-alarm" />
                      <span>2</span>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="notification"
                    >
                      <li>
                        <a href="#0">
                          <div className="image">
                            <img
                              src="admin/assets/images/lead/lead-6.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>
                              John Doe
                              <span className="text-regular">
                                comment on a product.
                              </span>
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet, consect etur
                              adipiscing elit Vivamus tortor.
                            </p>
                            <span>10 mins ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <div className="image">
                            <img
                              src="admin/assets/images/lead/lead-1.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>
                              Jonathon
                              <span className="text-regular">
                                like on a product.
                              </span>
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet, consect etur
                              adipiscing elit Vivamus tortor.
                            </p>
                            <span>10 mins ago</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* notification end */}
                  {/* message start */}
                  <div className="header-message-box ml-15 d-none d-md-flex">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="message"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="lni lni-envelope" />
                      <span>3</span>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="message"
                    >
                      <li>
                        <a href="#0">
                          <div className="image">
                            <img
                              src="admin/assets/images/lead/lead-5.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>Jacob Jones</h6>
                            <p>Hey!I can across your profile and ...</p>
                            <span>10 mins ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <div className="image">
                            <img
                              src="admin/assets/images/lead/lead-3.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>John Doe</h6>
                            <p>Would you mind please checking out</p>
                            <span>12 mins ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <div className="image">
                            <img
                              src="admin/assets/images/lead/lead-2.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6>Anee Lee</h6>
                            <p>Hey! are you available for freelance?</p>
                            <span>1h ago</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* message end */}
                  {/* filter start */}
                  <div className="filter-box ml-15 d-none d-md-flex">
                    <button className type="button" id="filter">
                      <i className="lni lni-funnel" />
                    </button>
                  </div>
                  {/* filter end */}
                  {/* profile start */}
                  <div className="profile-box ml-15">
                    <button
                      className="dropdown-toggle bg-transparent border-0"
                      type="button"
                      id="profile"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="profile-info">
                        <div className="info">
                          <h6>John Doe</h6>
                          <div className="image">
                            <img
                              src="admin/assets/images/profile/profile-image.png"
                              alt=""
                            />
                            <span className="status" />
                          </div>
                        </div>
                      </div>
                      <i className="lni lni-chevron-down" />
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="profile"
                    >
                      <li>
                        <a href="#0">
                          <i className="lni lni-user" /> View Profile
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="lni lni-alarm" /> Notifications
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          {" "}
                          <i className="lni lni-inbox" /> Messages{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          {" "}
                          <i className="lni lni-cog" /> Settings{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          {" "}
                          <i className="lni lni-exit" /> Sign Out{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* profile end */}
                </div>
              </div>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path={path} component={Content} />
          <Route path={`${path}/categories`} component={Category} />
          <Route path={`${path}/users`} component={User} />
          <Route path={`${path}/products`} component={Product} />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}
