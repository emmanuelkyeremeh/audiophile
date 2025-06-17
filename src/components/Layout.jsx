import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">
            audiophile
          </Link>
          <nav className="nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/category/headphones">Headphones</NavLink>
            <NavLink to="/category/speakers">Speakers</NavLink>
            <NavLink to="/category/earphones">Earphones</NavLink>
            <NavLink to="/cart" className="cart-link">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="main-content container">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-top">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="audiophile logo" />
            </Link>
            <nav className="footer-nav">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/category/headphones">Headphones</NavLink>
              <NavLink to="/category/speakers">Speakers</NavLink>
              <NavLink to="/category/earphones">Earphones</NavLink>
            </nav>
          </div>
          <p className="footer-description">
            Audiophile is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <div className="footer-bottom">
            <span className="footer-copyright">
              © {new Date().getFullYear()} Audiophile. All Rights Reserved.
            </span>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
