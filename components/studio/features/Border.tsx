import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const Border = () => {
  const { borders, setBorders } = useStudio();
  return (
    <>
      <p className=" text-sm font-medium mb-4">Media Border</p>
      <input
        type="range"
        min={0}
        max={30}
        step={1}
        defaultValue={0}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setBorders({ ...borders, border: Number(e.target.value) })
        }
      />

      <p className=" text-sm font-medium mb-4 mt-10">Border Reduce</p>
      <input
        type="range"
        min={0}
        max={50}
        step={1}
        defaultValue={12}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setBorders({ ...borders, reduce: Number(e.target.value) })
        }
      />
    </>
  );
};

export default Border;
