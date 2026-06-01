import { Link } from "react-router-dom";
import "./Nav bar.css";

const NavBar = () => {
  return (
    <nav className="nav--bar">
      <div className="nav--bar__Link-container">
        <Link className="nav--link" to="/">
          Home
        </Link>
      </div>
      <div className="nav--bar__Link-container">
        <Link className="nav--link" to="/about">
          About
        </Link>
      </div>
      <div className="nav--bar__Link-container">
        <Link className="nav--link" to="/projects">
          Projects
        </Link>
      </div>
      <div className="nav--bar__Link-container">
        <Link className="nav--link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
