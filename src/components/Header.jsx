import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Varun.</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/services"}>Services</Link>
        <HashLink to={"/#brands"}>Brands</HashLink>
      </main>
    </nav>
  );
};

export default Header;
