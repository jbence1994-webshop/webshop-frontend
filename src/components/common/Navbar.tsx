import * as React from "react";

const Navbar: React.FC<NavbarProps> = ({ displayTitle }) => {
  return <nav>{displayTitle}</nav>;
};

export default Navbar;
