import React from "react";
import Button from "../components/Button";
import bg2 from "../assets/image/bg2.svg";
import avatar from "../assets/image/avatar.png";
import zzz from "../assets/image/ZZZ.png";

export default function Home() {
  return (
    <div classname="intro text-primary bg-[url:('..//dfdfdfd')] ">
      <div className="bg-[#253C6E] h-full flex col-span-2 relative">
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
              color={"bg-[white]"}
              textcolor={"text-[#253C6E]"}
              bordercolor={"border-[#253C6E]"}
              borderwidth={"border-[1px]"}
              borderradius={"rounded-[8px]"}
              paddingx={"px-[20px]"}
              paddingy={"py-[10px]"}
            />
            <Button
              title={"Join Mentorship"}
              color={"bg-transparent"}
              textcolor={"text-white"}
              bordercolor={"border-white"}
              borderwidth={"border-[1px]"}
              borderradius={"rounded-[8px]"}
              paddingx={"px-[20px]"}
              paddingy={"py-[10px]"}
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
                paddingx={"px-[10px]"}
                paddingy={"py-[5px]"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
