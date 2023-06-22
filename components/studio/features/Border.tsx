import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const Border = () => {
  const { borders, setBorders } = useStudio();

  return (
    <>
      <p className=" md:text-sm text-xs font-medium md:mb-4 mb-2">
        Media Border
      </p>
      <input
        type="range"
        min={0}
        max={30}
        step={1}
        defaultValue={borders.border}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setBorders({ ...borders, border: Number(e.target.value) })
        }
      />
      <p className=" md:text-sm text-xs font-medium mb-3 mt-4">Border Color</p>
      <div className="w-full h-[40px] overflow-hidden rounded-lg">
        <input
          type="color"
          className="bg-transparent w-[110%] rounded-full h-[55px] cursor-pointer -ml-1 -mt-2"
          defaultValue={borders.color}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBorders({ ...borders, color: e.target.value })
          }
        />
      </div>

      <p className=" md:text-sm text-xs font-medium md:mb-4 mb-2 md:mt-10 mt-6">
        Border Reduce
      </p>
      <input
        type="range"
        min={0}
        max={50}
        step={1}
        defaultValue={borders.reduce}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setBorders({ ...borders, reduce: Number(e.target.value) })
        }
      />
    </>
  );
};

export default Border;
