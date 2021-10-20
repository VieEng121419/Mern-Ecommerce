import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./nav.scss";

export default function Nav(props) {
  var [childCate, setChildCate] = useState([]);
  var [grandChildCate, setGrandChildCate] = useState([]);
  const lstCate = props.listCate;
  const lstParentCate = lstCate.filter((value) => value.parentCate === "");
  const getChild = (id) => {
    setChildCate([]);
    lstCate.forEach((value, key) => {
      if (value.parentCate.includes(id)) {
        setChildCate((oldVal) => [...oldVal, value]);
      }
    });
  };
  const getGrandChild = (id, parentType) => {
    setGrandChildCate([]);
    lstCate.forEach((value, key) => {
      if (value.parentCate.includes(id)) {
        if (value.type === parentType || value.type === "0")
          setGrandChildCate((oldVal) => [...oldVal, value]);
      }
    });
  };
  const role = useSelector((state) => state.user.isAdmin);
  return (
    <div className="nav-item">
      <div className="container">
        <div className="nav-depart">
          <div className="depart-btn">
            <i className="ti-menu"></i>
            <span>Tất cả danh mục</span>
            <ul className="depart-hover">
              {lstParentCate.map((cate, key) => {
                return (
                  <li
                    data-key={key}
                    onMouseEnter={() => {
                      getChild(cate._id);
                    }}
                  >
                    <a href="/">{cate.name}</a>
                    <ul className="depart-hover sub-menu">
                      {childCate !== undefined
                        ? childCate.map((value, key) => {
                            return (
                              <li
                                data-key={key}
                                onMouseEnter={() =>
                                  getGrandChild(value._id, cate.type)
                                }
                              >
                                <a href="/">{value.name}</a>
                                <ul className="depart-hover subsub-menu">
                                  {grandChildCate !== undefined
                                    ? grandChildCate.map((value, key) => {
                                        return (
                                          <li>
                                            <a href="/#">{value.name}</a>
                                          </li>
                                        );
                                      })
                                    : null}
                                </ul>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <nav className="nav-menu mobile-menu">
          <ul>
            <li className="active">
              <a href="/#">Trang chủ</a>
            </li>
            <li>
              <a href="/#">Bài viết</a>
            </li>
            <li>
              <a href="/#">Trang</a>
              <ul className="dropdown">
                <li>
                  <a href="/#">Giỏ hàng</a>
                </li>
                <li>
                  <a href="/#">Đơn hàng</a>
                </li>
                {JSON.parse(localStorage.getItem("userInfo")) === null ? (
                  <li>
                    <Link to="/register">Đăng ký</Link>
                  </li>
                ) : null}
                {JSON.parse(localStorage.getItem("userInfo")) === null ? (
                  <li>
                    <Link to="/login">Đăng nhập</Link>
                  </li>
                ) : null}
                {role === 1 ? (
                  <li>
                    <Link to="/admin">Trang Quản trị</Link>
                  </li>
                ) : null}
              </ul>
            </li>
            {JSON.parse(localStorage.getItem("userInfo")) !== null ? (
              <li>
                <Link to="/logout">Đăng xuất</Link>
              </li>
            ) : null}
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
      </div>
    </div>
  );
}
