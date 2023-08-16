import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import Pattern from "../../assets/image/Pattern.png";
import Email from "../../assets/image/email.png";
import Phonenum from "../../assets/image/phone.png";
import Facebook from "../../assets/image/facebook.png";
import Linkedin from "../../assets/image/linkedin.png";
import Instagram from "../../assets/image/instagram.png";

const FooterData = [
  {
    title: "AboutUs",
    path: "/about",
  },
  {
    title: "ContactUs",
    path: "/contact",
  },
  {
    title: "Postcast",
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
];

export default function Footer() {
  return (
    <div>
      <div className="col-span-3 p-[50px] flex">
        <div className="">
          <div className="logo">
            <img className="w-[292px]" src={logo} alt="Logo" />
          </div>
          <div className="">
            <h5 className="flex items-center text-4 pt-4">
              Find the best way to learn new things to improve your skills
            </h5>
          </div>
          <div className="flex flex-col pt-11">
            <div className="flex">
              <img className="pr-3" src={Email} alt="Email" />
              <h3 className="font-bold text-[16px]">+1 738 873 90</h3>
            </div>
            <div className="flex">
              <img className="pr-3" src={Phonenum} alt="Phonenum" />
              <h3 className="font-bold text-[16px]">hi@company.com</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center pr-[107px]">
          <img className="w-[234px]" src={Pattern} alt="Pattern" />
        </div>
        <div className="flex w-[727px] justify-between">
          <div className="flex-col">
            <h3 className="font-bold text-4 leading-[180%] pb-4">Company</h3>
            <div className="flex flex-col">
              {FooterData.map((data) => (
                <Link to={data.path} className="pb-3">
                  {data.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-col">
            <h3 className="font-bold text-4 leading-[180%] pb-4">Company</h3>
            <div className="flex flex-col">
              {FooterData.map((data) => (
                <Link to={data.path} className="pb-3">
                  {data.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-col">
            <h3 className="font-bold text-4 leading-[180%] pb-4">Company</h3>
            <div className="flex flex-col">
              {FooterData.map((data) => (
                <Link to={data.path} className="pb-3">
                  {data.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-col">
            <h3 className="font-bold text-4 leading-[180%] pb-4">Find us</h3>
            <div className="flex gap-2">
              <img src={Facebook} alt="Facebook" className="" />
              <img src={Linkedin} alt="Linkedin" className="" />
              <img src={Instagram} alt="Instagram" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h5>2023 logo inc. All Rights Reserved</h5>
      </div>
    </div>
  );
}
