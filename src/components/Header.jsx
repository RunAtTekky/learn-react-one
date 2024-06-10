import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>Varun.</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/#brands"}>Brands</Link>
      </main>
    </nav>
  );
};

export default Header;
