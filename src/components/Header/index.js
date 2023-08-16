import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import Button from "../Button";

const MenuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Plan",
    path: "/plan",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "AboutUs",
    path: "/about",
  },
  {
    title: "ContactUs",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <div className="navbar flex justify-between px-[68px] py-[29px] fixed top-0 z-10 bg-white w-full rounded-bl-[35px] rounded-br-[35px]">
      <div className="logo">
        <img className="" src={logo} alt="Logo" />
      </div>

      <div className="menu items-center flex">
        {MenuData.map((data) => (
          <Link className="p-[10px]" to={data.path}>
            {data.title}
          </Link>
        ))}
      </div>

      <div className="sign flex gap-2">
        <Button
          title={"Login"}
          textcolor={"text-[#253C6E]"}
          bordercolor={"border-[#253C6E]"}
          borderwidth={"border-[1px]"}
          borderradius={"rounded-[100px]"}
        />
        <Button
          title={"Sign Up"}
          color={"bg-[#253C6E]"}
          textcolor={"text-[#fff]"}
          bordercolor={"border-[#253C6E]"}
          borderwidth={"border-[1px]"}
          borderradius={"rounded-[100px]"}
        />
      </div>
    </div>
  );
}
