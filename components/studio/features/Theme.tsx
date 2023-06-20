import { MoonIcon, SunIcon } from "@/components/ui/Icons";
import { useStudio } from "@/context/StudioContext";

const Theme = () => {
  const { mediaTheme, setMediaTheme } = useStudio();
  return (
    <>
      <p className=" text-sm font-medium mb-4">Media Theme</p>
      <div className=" flex items-center">
        <div className=" flex flex-col items-center">
          <button
            className={`${
              mediaTheme == "dark" && "ring-2 ring-neutral-200"
            } glass w-[37px] h-[37px] rounded-lg flex items-center justify-center`}
            onClick={() => setMediaTheme("dark")}
          >
            <MoonIcon />
          </button>
          <p className=" text-[10px] mt-2">Dark</p>
        </div>
        <div className=" flex flex-col items-center ml-5">
          <button
            className={`${
              mediaTheme == "light" && "ring-2 ring-neutral-200"
            } glass w-[37px] h-[37px] rounded-lg flex items-center justify-center`}
            onClick={() => setMediaTheme("light")}
          >
            <SunIcon />
          </button>
          <p className=" text-[10px] mt-2">Light</p>
        </div>
      </div>
    </>
  );
};

export default Theme;
