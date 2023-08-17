import React from "react";

export default function Button({
  title,
  color,
  textcolor,
  bordercolor,
  borderradius,
  borderwidth,
  paddingx,
  paddingy,
}) {
  return (
    <button
      className={`${paddingx} ${paddingy} ${borderwidth} ${borderradius} ${bordercolor} ${textcolor} ${color}`}
    >
      {title}
    </button>
  );
}
