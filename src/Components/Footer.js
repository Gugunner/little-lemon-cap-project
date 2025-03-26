import React from "react";
import "../styles/footer.css";

function LittleLemonLogo() {
  return (
    <img
      src="/assets/images/Logo2.svg"
      alt="Little Lemon Alternative Logotype"
    ></img>
  );
}

function DoormatNavigation() {
  return (
    <div className="footer-menu">
      <h5 className="special-section menu-title">Doormat</h5>
      <h5 className="special-section menu-title">Navigation</h5>
      <ul className="split-paragraph-text">
        <li>
          <a href="http://localhost:3000">Home</a>
        </li>
        <li>
          <a href="http://localhost:3000/about">About</a>
        </li>
        <li>
          <a href="http://localhost:3000/menu">Menu</a>
        </li>
        <li>
          <a href="http://localhost:3000/reservations">Reservations</a>
        </li>
        <li>
          <a href="http://localhost:3000/order">Order Online</a>
        </li>
        <li>
          <a href="http://localhost:3000/login">Login</a>
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="footer-menu menu-gap">
      <h5 className="special-section menu-title">Contact</h5>
      <ul className="split-paragraph-text">
        <li>
          <a href="http://localhost:3000">Address</a>
        </li>
        <li>
          <a href="http://localhost:3000">Phone number</a>
        </li>
        <li>
          <a href="http://localhost:3000">email</a>
        </li>
      </ul>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="footer-menu menu-gap">
      <h5 className="special-section menu-title">Social Media Links</h5>
      <ul className="split-paragraph-text">
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com">Instagram</a>
        </li>
        <li>
          <a href="https://tiktok.com">Tik Tok</a>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-navigation constrain-content">
      <hr />
      <div className="flex-column justify-center full-height">
        <div className="flex-row justify-between full-width wrap-footer center-items">
          <LittleLemonLogo />
          <DoormatNavigation />
          <Contact />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
