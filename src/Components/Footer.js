import "../styles/landing.css";
import "../styles/helpers.css";
import "../styles/footer.css";
import "../styles/fonts.css";

function LittleLemonLogo() {
  return (
    <img src="/assets/Logo2.svg" alt="Little Lemon Alternative Logotype"></img>
  );
}

function DoormatNavigation() {
  return (
    <div className="vertical">
      <h5 className="special-section">Doormat</h5>
      <h5 className="special-section">Navigation</h5>
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
    <div className="vertical gap">
      <h5 className="special-section">Contact</h5>
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
    <div className="vertical gap">
      <h5 className="special-section">Social Media Links</h5>
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
    <footer className="footer-navigation outline">
      <div className="constrain-content outline">
        <LittleLemonLogo />
        <div className="space-around outline">
          <DoormatNavigation />
          <Contact />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
