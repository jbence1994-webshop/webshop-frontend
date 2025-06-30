import * as React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = ({ homePage, pages }) => {
  return (
    <header>
      <nav>
        <div className="home_page">
          <Link key={homePage.key} to={homePage.href}>
            {homePage.title}
          </Link>
        </div>
        <div className="pages">
          {pages.map(({ title, key, href }: Page) => (
            <Link key={key} to={href}>
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
