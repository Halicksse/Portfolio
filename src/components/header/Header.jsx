import { Link } from "react-router-dom";
import "../header/header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="the website's logo" className="header-logo" />
      </Link>
      <div className="Links">
        <Link to="/" className="links">
          <i>Home</i>
        </Link>
        <Link to="/description" className="links">
          <i>Description</i>
        </Link>
        <Link to="/projects" className="links">
          <i>Projects</i>
        </Link>
        <Link to="/cv" className="links">
          <i> Cv</i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
