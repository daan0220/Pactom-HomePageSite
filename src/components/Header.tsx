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
            <Link to="/about"><h6>ABOUT</h6></Link>
          </li>
          <li>
            <Link to="/service"><h6>SERVICE</h6></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
