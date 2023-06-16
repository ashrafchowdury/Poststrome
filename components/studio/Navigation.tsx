import React from "react";
import Logo from "../ui/Logo";
import { DownloadIcon } from "../ui/Icons";

const Navigation = () => {
  return (
    <nav className=" w-full md:h-[120px] h-[100px] flex items-center justify-between">
      <Logo />
      <button className="glass md:text-sm text-xs px-7 py-3 rounded-lg font-semibold flex items-center">
        <DownloadIcon style="mr-3" />
        Download
      </button>
    </nav>
  );
};

export default Navigation;
