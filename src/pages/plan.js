import React from "react";
import avatar from "../assets/image/avatar.png";
import Button from "../components/Button";

export default function Plan() {
  return (
    <div classname="intro text-primary">
      <div className="bg-[#253C6E] flex flex-col pt-[200px]">
        {/* User input */}
        <div className="grid grid-cols-[1fr_auto] ml-[150px] pb-[10px] gap-2">
          <div className="flex justify-end">
            <div className="inline-grid  rounded-[15px_15px_0px_15px] bg-[#d8d8d8]">
              <h4 className="text-[#253C6E] p-3">
                What is the difference between React and Next.js?What is the
                difference between React and Next.js? What is the difference
                between React and Next.js? What is the difference between React
                and Next.js? What is the difference between React and Next.js?
                What is the difference between React and Next.js? What is the
                difference between React and Next.js?What is the difference
                between React and Next.js? What is the difference between React
                and Next.js?What is the difference between React and Next.js?
                What is the difference between React and Next.js?
              </h4>
            </div>
          </div>
          <div className="w-[50px] self-end">
            <img src={avatar} alt="avatar" className="" />
          </div>
        </div>
        {/* GPT OutPut */}
        <div className="grid grid-cols-[auto_1fr] pb-[10px] mr-[150px] gap-2">
          <div className="w-[50px] self-end">
            <img src={avatar} alt="avatar" className="" />
          </div>
          <div>
            <div className="inline-grid border-[2px] border-[white] rounded-[15px_15px_15px_0px] bg-[#253C6E]">
              <h4 className="text-white p-3">
                Yes, certainly! React and Next.js are both JavaScript-based
                frameworks that are commonly used for applications.Yes,
                certainly! React and Next.js are both JavaScript-based
                frameworks that are commonly used for applications.Yes,
                certainly! React and Next.js are both JavaScript-based
                frameworks that are commonly used for applications.Yes,
                certainly! React and Next.js are both JavaScript-based
                frameworks that are commonly used for applications.
              </h4>
            </div>
          </div>
        </div>
        {/* GPT Prompt */}
        <div className="flex gap-2 p-[5px]">
          <input className="rounded-[5px] w-full"></input>
          <Button
            title={"SEND"}
            textcolor={"text-[#fff]"}
            bordercolor={"border-[#fff]"}
            borderwidth={"border-[1px]"}
            borderradius={"rounded-[8px]"}
            paddingx={"px-[25px]"}
            paddingy={"py-[5px]"}
          />
        </div>
      </div>
    </div>
  );
}
