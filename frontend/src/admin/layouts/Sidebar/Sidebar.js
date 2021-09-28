import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar-nav-wrapper">
      <div className="navbar-logo">
        <a href="/admin">
          <img src="admin/assets/images/logo/logo.svg" alt="logo" />
        </a>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item__admin nav-item-has-children">
            <a
              href="#0"
              data-bs-toggle="collapse"
              data-bs-target="#ddmenu_1"
              aria-controls="ddmenu_1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon">
                <i className="lni lni-dashboard" />
              </span>
              <span className="text">Dashboard</span>
            </a>
            <ul id="ddmenu_1" className="collapse show dropdown-nav">
              <li>
                <a href="index.html" className="active">
                  <i className="lni lni-arrow-right" /> e-Commerce
                </a>
              </li>
            </ul>
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
              <span className="text">Pages</span>
            </a>
            <ul id="ddmenu_2" className="collapse dropdown-nav">
              <li>
                <a href="settings.html">
                  <i className="lni lni-arrow-right" /> Settings
                </a>
              </li>
              <li>
                <a href="blank-page.html">
                  <i className="lni lni-arrow-right" /> Blank Page
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item__admin">
            <a href="invoice.html">
              <span className="icon">
                <i className="lni lni-credit-cards" />
              </span>
              <span className="text">Invoice</span>
            </a>
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
                <i className="lni lni-users" />
              </span>
              <span className="text">Auth</span>
            </a>
            <ul id="ddmenu_3" className="collapse dropdown-nav">
              <li>
                <a href="signin.html">
                  <i className="lni lni-arrow-right" /> Sign In
                </a>
              </li>
              <li>
                <a href="signup.html">
                  <i className="lni lni-arrow-right" /> Sign Up
                </a>
              </li>
            </ul>
          </li>
          <span className="divider">
            <hr />
          </span>
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
              <span className="text">UI Elements </span>
            </a>
            <ul id="ddmenu_4" className="collapse dropdown-nav">
              <li>
                <a href="alerts.html">
                  <i className="lni lni-arrow-right" /> Alerts
                </a>
              </li>
              <li>
                <a href="buttons.html">
                  <i className="lni lni-arrow-right" /> Buttons
                </a>
              </li>
              <li>
                <a href="cards.html">
                  <i className="lni lni-arrow-right" /> Cards
                </a>
              </li>
              <li>
                <a href="typography.html">
                  <i className="lni lni-arrow-right" /> Typography
                </a>
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
                <i className="lni lni-package" />
              </span>
              <span className="text">Icons</span>
            </a>
            <ul id="ddmenu_55" className="collapse dropdown-nav">
              <li>
                <a href="icons.html">
                  <i className="lni lni-arrow-right" /> LineIcons
                </a>
              </li>
              <li>
                <a href="mdi-icons.html">
                  <i className="lni lni-arrow-right" /> MDI Icons
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
              <span className="text"> Forms </span>
            </a>
            <ul id="ddmenu_5" className="collapse dropdown-nav">
              <li>
                <a href="form-elements.html">
                  <i className="lni lni-arrow-right" /> From Elements
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
  );
}
