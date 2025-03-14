import React from "react";
import { NavLink } from "react-router";
import { homePath, reserveTablePath } from "../Constants/paths";

export default function Nav() {
  return (
    <nav className="outline">
      <ul>
        <li>
          <NavLink to={homePath} className="special-section">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="http://localhost:3000/about" className="special-section">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="http://localhost:3000/menu" className="special-section">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to={reserveTablePath} className="special-section">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="http://localhost:3000/order" className="special-section">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="http://localhost:3000/login" className="special-section">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
