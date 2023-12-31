import React from "react";
import Button from "../components/Button";
import bg2 from "../assets/image/bg2.svg";
import myavatar from "../assets/image/user_avatar.png";
import zzz from "../assets/image/ZZZ.png";
import aboutimage from "../assets/image/aboutimage.png";
import arrow from "../assets/image/arrow.png";

export default function Home() {
  return (
    <div classname="intro text-primary] ">
      <div className="bg-blue h-full flex col-span-2 relative">
        <img src={zzz} alt="" className="absolute right-10 top-20" />
        <div className="pl-[90px]">
          <div className="pt-[200px] pb-[152px]">
            <div className="text-[52px] text-[#fff]">
              Best Hands-on Multi-Cloud Training
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              title={"Join Classes"}
              color={"bg-[#fff]"}
              textcolor={"text-blue"}
              bordercolor={"border-blue"}
              borderwidth={"border-[1px]"}
              borderradius={"rounded-[8px]"}
              paddingx={"px-[30px]"}
              paddingy={"py-[20px]"}
              buttonhover={"hover:bg-gray"}
            />
            <Button
              title={"Join Mentorship"}
              color={"bg-transparent"}
              textcolor={"text-white"}
              bordercolor={"border-white"}
              borderwidth={"border-[1px]"}
              borderradius={"rounded-[8px]"}
              paddingx={"px-[30px]"}
              paddingy={"py-[20px]"}
              buttonhover={"hover:bg-blackblue"}
            />
          </div>
        </div>

        <div className="pl-[150px]">
          <div className="pt-[100px] pb-[63px]">
            <img src={bg2} alt="bg2" />
          </div>
          <div className="rounded-[15px] p-[16px] bg-[rgba(255,255,255,0.75)] backdrop-blur-[6px] ml-[650px] mt-[350px] flex-col col-span-2 absolute left-0 top-0">
            <div className="flex ">
              <div className="">
                <img src={myavatar} alt="avatar" className="rounded-[50%]" />
              </div>
              <div className="pl-[11px] pb-2">
                <h5 className="font-bold">Frontend Improvement</h5>
                <h5 className="text-[#2b2b2bb3]">August, 2023</h5>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                title={"Join Now"}
                color={"bg-rightblue"}
                textcolor={"text-[#fff]"}
                borderradius={"rounded-[7px]"}
                paddingx={"px-[10px]"}
                paddingy={"py-[5px]"}
                buttonhover={"hover:bg-blue"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[113px]">
        <div className="grid px-[144px] grid-cols-2">
          <div className="pr-[20px] mr-[40px]">
            <img src={aboutimage} alt="aboutimage" className="" />
          </div>
          <div className="">
            <h4 className="text-[42px] font-bold leading-[45px] pb-6">
              Learn with various materials and various fields in a modern way
            </h4>
            <h5 className="text-[14px] pb-[30px]">
              Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
              magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
              Nunc urna, vitae sit sapien diam diam cursus. Cras tempus
              venenatis consequat, in amet urna, tempor. Augue elit, ultrices
              sapien tellus. Tellus sapien, risus mauris pretium. At tortor,
              blandit lorem sit ac, malesuada.
            </h5>
            <div className="flex flex-row">
              <a href="" className="text-blue text-[16px]" id="#home">
                About us
                <img src={arrow} className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
