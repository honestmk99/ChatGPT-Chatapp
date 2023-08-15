import React from "react";
import logo from "../../public/image/logo.svg";

export default function Header() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="tabs"></div>
      <div className=""></div>
    </div>
  );
}
