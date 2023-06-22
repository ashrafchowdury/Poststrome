"use client";
import { useState } from "react";
import { useStudio } from "@/context/StudioContext";
import { SearchIcon } from "../../ui/Icons";
import { apiCaller } from "@/utils/functions/apiCaller";

const Add = () => {
  const [isError, setIsError] = useState("");
  const { setMedia } = useStudio();

  const handleSearchURL = (event: any) => {
    event.preventDefault();
    const url = event.target[0].value;

    if (url?.includes("https://github.com/")) {
      setMedia({});
      apiCaller("api/repository", url, setMedia);
      isError && setIsError("");
    } else {
      setIsError("Please Add Valid URL");
    }
  };
  return (
    <>
      <p className=" md:text-sm text-xs font-medium mb-4">Add Repository URL</p>
      <form className=" relative w-full" onSubmit={handleSearchURL}>
        <SearchIcon style=" absolute top-[10px] left-[10px] text-sm text-neutral-600" />
        <input
          type="text"
          placeholder="Add Github Repo URL here"
          className=" w-full pl-8 pr-2 py-2 text-xs rounded-lg border border-neutral-600 focus:ring-2 focus:ring-neutral-400 duration-200 outline-none bg-transparent"
        />
      </form>
      {isError && <p className="mt-2 text-xs text-red-500">{isError}</p>}
    </>
  );
};

export default Add;
