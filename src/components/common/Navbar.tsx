import { type FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: FC<NavbarProps> = ({ applicationName, homePagePath, pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container">
        <Link className="navbar-brand h1 mb-0" to={homePagePath}>
          {applicationName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${isOpen ? "show" : "collapse"}`}
          id="navbarToggler"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages.map(({ name, path }) => (
              <li key={name} className="nav-item">
                <Link className="nav-link" aria-current="page" to={path}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
