import "../styles/header.css";
import "../styles/fonts.css";
import "../styles/helpers.css";

export default function Nav() {
  return (
    <nav className="outline">
      <ul>
        <li>
          <a className="special-section" href="http://localhost:3000">
            Home
          </a>
        </li>
        <li>
          <a className="special-section" href="http://localhost:3000/about">
            About
          </a>
        </li>
        <li>
          <a className="special-section" href="http://localhost:3000/menu">
            Menu
          </a>
        </li>
        <li>
          <a className="special-section" href="http://localhost:3000/reservations">
            Reservations
          </a>
        </li>
        <li>
          <a className="special-section" href="http://localhost:3000/order">
            Order Online
          </a>
        </li>
        <li>
          <a className="special-section" href="http://localhost:3000/login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
