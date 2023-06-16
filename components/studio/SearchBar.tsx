import React from "react";
import { SearchIcon } from "../ui/Icons";

const SearchBar = () => {
  return (
    <>
      <div className=" relative w-full">
        <SearchIcon style=" absolute top-[15px] left-[18px] text-lg text-neutral-600" />
        <input
          type="text"
          placeholder="Add URL here"
          className=" w-full px-11 py-3 text-sm rounded-xl border-2 border-neutral-600 bg-transparent"
        />
      </div>
    </>
  );
};

export default SearchBar;
