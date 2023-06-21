"use client";

import FeaturesEditor from "./FeatureEditor";
import { useStudio } from "@/context/StudioContext";
import { feaures } from "@/utils/helpers/features";

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
    <aside className=" flex items-center flex-row-reverse">
      {isEditor && <FeaturesEditor />}

      <section className="glass relative lg:w-[80px] py-4 rounded-xl flex flex-col items-center justify-center space-y-5">
        {feaures.map((data, ind) => {
          return (
            <div
              className="w-[55px] overflow-hidden flex flex-col items-center"
              key={ind}
            >
              <button
                className="glass w-[45px] h-[45px] text-xl rounded-lg flex items-center justify-center"
                onClick={() => handleEditor(data.title)}
                disabled={isDownload}
              >
                {data.icon}
              </button>
              <p className=" text-start text-xs mt-2 whitespace-nowrap">
                {data.title}
              </p>
            </div>
          );
        })}
      </section>
    </aside>
  );
};

export default Features;
