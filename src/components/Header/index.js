import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.svg";

export default function Header() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/plan">Plan</Link>
      </div>
      <div className=""></div>
    </div>
  );
}
