"use client";

import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const Shadow = () => {
  const { mediaShadow, setMediaShadow } = useStudio();

  return (
    <>
      <p className=" text-sm font-medium mb-4">Image Shadow</p>
      <input
        type="range"
        min={0}
        max={50}
        step={2}
        defaultValue={mediaShadow}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMediaShadow(Number(e.target.value))
        }
      />
    </>
  );
};

export default Shadow;
