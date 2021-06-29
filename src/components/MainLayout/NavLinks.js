import React from "react";
import { Link } from "gatsby";

const NavLinks = () => {
  return (
    <>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/about" activeClassName="active">
        About
      </Link>
      <Link to="/services" activeClassName="active">
        Services
      </Link>
      <Link to="/blog" activeClassName="active" partiallyActive={true}>
        Blog
      </Link>
      <Link to="/contact" activeClassName="active" className="contact">
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
