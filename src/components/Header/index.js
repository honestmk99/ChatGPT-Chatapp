import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import Button from "../Button";

const MenuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "ChatGPT",
    path: "/chatgpt",
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
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div
      id="home"
      className="navbar flex justify-between px-[68px] py-[15px] fixed top-0 z-10 bg-white w-full rounded-bl-[35px] rounded-br-[35px]"
    >
      <div className="logo">
        <img className="max-lg:w-[150px]" src={logo} alt="Logo" />
      </div>

      <div className="menu items-center flex max-lg:hidden">
        {MenuData.map((data) => (
          <Link className="p-[10px]" to={data.path}>
            {data.title}
          </Link>
        ))}
      </div>
      <div className="relative lg: w-[200px] lg:hidden">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2.5 text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          {MenuData.map((data) => (
            <option value={data.path}>{data.title}</option>
          ))}
        </select>
      </div>

      {/* Dropdown */}

      <div className="sign flex items-center gap-2">
        <div className="">
          <Button
            title={"Login"}
            textcolor={"text-blue"}
            bordercolor={"border-blue"}
            borderwidth={"border-[1px]"}
            borderradius={"rounded-[100px]"}
            paddingx={"px-[40px]"}
            paddingy={"py-[5px]"}
            buttonhover={"hover:bg-gray"}
          />
        </div>
        <div>
          <Button
            title={"Sign Up"}
            color={"bg-blue"}
            textcolor={"text-[#fff]"}
            bordercolor={"border-blue"}
            borderwidth={"border-[1px]"}
            borderradius={"rounded-[100px]"}
            paddingx={"px-[40px]"}
            paddingy={"py-[5px]"}
            buttonhover={"hover:bg-blackblue"}
          />
        </div>
      </div>
    </div>
  );
}
