import Nav from "./Nav";
import "../styles/landing.css";
import "../styles/header.css";
import "../styles/helpers.css";

function LittleLemonLogo() {
  return (
    <img
      className="outline"
      src="/assets/Logo.svg"
      alt="Little Lemon Restaurant Logo"
    />
  );
}

export default function Header() {
  return (
    <header className="navigation-bar outline">
      <div className="constrain-content outline">
        <LittleLemonLogo />
        <Nav />
      </div>
    </header>
  );
}
