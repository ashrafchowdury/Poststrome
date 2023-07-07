"use client";

import FeaturesEditor from "./FeatureEditor";
import { useStudio } from "@/context/StudioContext";
import { features } from "@/utils";

const Features = () => {
  const { isEditor, setIsEditor, isDownload } = useStudio();
  const handleEditor = (title: string) => {
    if (title == isEditor) {
      setIsEditor("");
    } else {
      setIsEditor(title);
    }
  };

  return (
    <aside className="lg:w-auto md:w-[720px] h-48 sm:w-[90%] w-full flex items-center flex-row-reverse lg:relative fixed z-30 bottom-0">
      {isEditor && <FeaturesEditor />}

      <section className="glass relative lg:w-[80px] md:w-[720px] w-full lg:py-4 py-4 lg:rounded-xl rounded-t-lg flex lg:flex-col items-center justify-center lg:space-y-5 lg:space-x-0 sm:space-x-4 sm:overflow-x-hidden overflow-x-auto">
        <div className=" sm:hidden sm:mx-0 mx-5 w-[35px] h-[35px]"></div>
        <div className=" sm:hidden sm:mx-0 mx-5 w-[35px] h-[35px]"></div>
        {features.map((data, ind) => {
          return (
            <div
              className="xl:w-[55px] lg:w-[50px] w-full sm:overflow-hidden flex flex-col items-center sm:mx-0 mx-3"
              key={ind}
            >
              <button
                className="glass xl:w-[45px] xl:h-[45px] lg:w-[42px] lg:h-[42px] md:w-[40px] md:h-[40px] sm:w-[36px] sm:h-[36px] w-[35px] h-[35px] xl:text-xl lg:text-lg md:text-[16px] text-sm rounded-lg flex items-center justify-center"
                onClick={() => handleEditor(data.title)}
                disabled={isDownload}
              >
                {data.icon}
              </button>
              <p className=" text-start md:text-xs text-[10px] mt-2 whitespace-nowrap">
                {data.title}
              </p>
            </div>
          );
        })}
        <div className=" sm:hidden sm:mx-0 mx-5 w-[35px] h-[35px]"></div>
      </section>
    </aside>
  );
};

export default Features;
