import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Daiki.com</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/"><h6>HOME</h6></a>
          </li>
          <li>
            <a href="/about"><h6>ABOUT</h6></a>
          </li>
          <li>
            <a href="/service"><h6>SERVICE</h6></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
