import React from "react";

export default function Button({
  title,
  color,
  textcolor,
  bordercolor,
  borderradius,
  borderwidth,
}) {
  return (
    <button
      className={`px-[40px] py-[10px] ${borderwidth} ${borderradius} ${bordercolor} ${textcolor} ${color}`}
    >
      {title}
    </button>
  );
}
