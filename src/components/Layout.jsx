import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import hamburgerIcon from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import CartModal from "./CartModal";
import "./Layout.css";

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-content">
          <div className="header-left">
            <button className="hamburger-btn" onClick={toggleMobileMenu}>
              <img src={hamburgerIcon} alt="Menu" />
            </button>
            <Link to="/" className="logo" onClick={closeMenus}>
              <img src={logo} alt="audiophile logo" />
            </Link>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
            <NavLink to="/" end onClick={closeMenus}>
              HOME
            </NavLink>
            <NavLink to="/category/headphones" onClick={closeMenus}>
              HEADPHONES
            </NavLink>
            <NavLink to="/category/speakers" onClick={closeMenus}>
              SPEAKERS
            </NavLink>
            <NavLink to="/category/earphones" onClick={closeMenus}>
              EARPHONES
            </NavLink>
          </nav>
          <button className="cart-btn" onClick={toggleCart}>
            <img src={cartIcon} alt="Cart" className="cart-icon" />
          </button>
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
                HOME
              </NavLink>
              <NavLink to="/category/headphones">HEADPHONES</NavLink>
              <NavLink to="/category/speakers">SPEAKERS</NavLink>
              <NavLink to="/category/earphones">EARPHONES</NavLink>
            </nav>
          </div>
          <p className="footer-description">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <div className="footer-bottom">
            <p className="copyright">Copyright 2024. All Rights Reserved</p>
            <div className="social-links">
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

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {(isCartOpen || isMobileMenuOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsCartOpen(false);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Layout;
