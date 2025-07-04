import * as React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = ({ title, pages }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <p>{title}</p>
        </div>
        <div className="pages">
          {pages.map(({ title, linkProperties }: Page) => (
            <Link key={linkProperties.key} to={linkProperties.value}>
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
