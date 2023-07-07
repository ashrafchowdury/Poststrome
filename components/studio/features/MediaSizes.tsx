import { ChangeEvent } from "react";
import { sizes } from "@/utils";
import { useStudio } from "@/context/StudioContext";

const MediaSizes = () => {
  const { mediaSizes, setMediaSizes, mediaScale, setMediaScale } = useStudio();
  return (
    <>
      <p className=" md:text-sm text-xs font-medium md:mb-4 mb-2">
        Different Sizes
      </p>
      <div className=" flex flex-wrap items-center">
        {sizes.map((data, ind) => {
          const width = data.size.slice(0, data.size.indexOf("x")).trim();
          const height = data.size.slice(data.size.indexOf("x") + 1).trim();

          return (
            <div className=" flex flex-col items-center mr-4 my-2" key={ind}>
              <button
                className={` ${
                  `${height}px` == mediaSizes.height &&
                  "ring-2 ring-neutral-200"
                } glass md:w-[37px] md:h-[37px] w-8 h-8 rounded-lg flex items-center justify-center`}
                onClick={() => {
                  setMediaSizes({ width: `${width}px`, height: `${height}px` });
                }}
              >
                {data.icon}
              </button>
              <p className=" text-[10px] mt-2">{data.size}</p>
            </div>
          );
        })}
      </div>

      <p className=" md:text-sm text-xs font-medium md:mb-4 mb-2 md:mt-8 mt-5">
        Zoom In & Zoom Out
      </p>
      <input
        type="range"
        min={0.6}
        max={1.5}
        step={0.1}
        defaultValue={mediaScale}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMediaScale(Number(e.target.value))
        }
      />
    </>
  );
};

export default MediaSizes;
