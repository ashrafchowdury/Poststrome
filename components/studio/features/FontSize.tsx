import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const FontSize = () => {
  const { fontSize, setFontSize } = useStudio();
  return (
    <>
      <p className=" text-sm font-medium mb-4">Media Font Size</p>
      <input
        type="range"
        min={14}
        max={30}
        step={1}
        defaultValue={fontSize}
        className="w-full"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFontSize(Number(e.target.value))
        }
      />
    </>
  );
};

export default FontSize;
