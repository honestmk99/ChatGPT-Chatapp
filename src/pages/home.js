import React from "react";
import Button from "../components/Button";
import bg2 from "../assets/image/bg2.svg";
import avatar from "../assets/image/avatar.png";

export default function Home() {
  return (
    <div classname="intro text-primary">
      <div className="bg-[#253C6E] h-full flex col-span-2 relative">
        <div className="pl-[90px]">
          <div className="pt-[292px] pb-[152px]">
            <div className="text-[52px] text-[#fff]">
              Best Hands-on Multi-Cloud Training
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              title={"Join Classes"}
              color={"bg-[white]"}
              textcolor={"text-[#253C6E]"}
              bordercolor={"border-[#253C6E]"}
              borderwidth={"border-[1px]"}
              borderradius={"rounded-[8px]"}
            />
            <Button
              title={"Join Mentorship"}
              color={"bg-transparent"}
              textcolor={"text-white"}
              bordercolor={"border-white"}
              borderwidth={"border-[1px]"}
              borderradius={"rounded-[8px]"}
            />
          </div>
        </div>

        <div className="pl-[150px]">
          <div className="pt-[143px] pb-[63px]">
            <img src={bg2} alt="bg2" />
          </div>
          <div className="rounded-[15px] p-[16px] bg-[rgba(255,255,255,0.75)] backdrop-blur-[6px] ml-[750px] mt-[443px] flex-col col-span-2 absolute left-0 top-0">
            <div className="flex ">
              <div className="">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="pl-[11px]">
                <h5 className="font-bold">Learn basic UI/UX Design</h5>
                <h5 className="text-[#2b2b2bb3]">Today at 12 PM</h5>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                title={"Join Now"}
                color={"bg-[#16629C]"}
                textcolor={"text-[#fff]"}
                borderradius={"rounded-[7px]"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
