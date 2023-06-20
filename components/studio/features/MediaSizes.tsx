import { sizes } from "@/utils/helpers/mediaSizes";
import { useStudio } from "@/context/StudioContext";

const MediaSizes = () => {
  const { mediaSizes, setMediaSizes } = useStudio();
  return (
    <>
      <p className=" text-sm font-medium mb-4">Different Sizes</p>
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
                } glass w-[37px] h-[37px] rounded-lg flex items-center justify-center`}
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
    </>
  );
};

export default MediaSizes;
