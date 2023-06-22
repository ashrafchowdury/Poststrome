"use client";

import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const Shadow = () => {
  const { mediaShadow, setMediaShadow } = useStudio();

  return (
    <>
      <p className=" md:text-sm text-xs font-medium md:mb-4 mb-2">
        Image Shadow
      </p>
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
