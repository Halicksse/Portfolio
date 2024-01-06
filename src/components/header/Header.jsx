import "../header/header.css";

function Header() {
  return (
    <div className="header">
      <div className="Links">
        <a href="/" className="links">
          <i>Home</i>
        </a>
        <a href="#description" className="links">
          <i>Description</i>
        </a>
        <a href="#projects" className="links">
          <i>Projects</i>
        </a>
        <a href="#cv" className="links">
          <i> Cv</i>
        </a>
      </div>
    </div>
  );
}

export default Header;
