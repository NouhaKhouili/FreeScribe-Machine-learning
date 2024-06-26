import React from "react";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between gap-4">
      <a href="/">
        {" "}
        <h1 className=" font-medium">
          Free<span className=" text-blue-400 font-bold">Scribe</span>
        </h1>
      </a>
      <a
        href="/"
        className=" text-sm flex items-center gap-2 specialBtn px-4 py-2 rounded-lg text-blue-400"
      >
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </header>
  );
}
