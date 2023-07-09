import { useStudio } from "@/context/StudioContext";
import { SlideIcon } from "../ui/Icons";
import { renderFeatures } from "@/utils";

const FeaturesEditor = () => {
  const { isEditor, setIsEditor } = useStudio();

  if (!isEditor) null;
  return (
    <section className="glass xl:w-[280px] lg:h-[790px] lg:w-[260px] md:w-[720px] w-full rounded-xl xl:-ml-8 lg:ml-0 lg:pl-12 lg:pr-4 px-8 py-5 lg:pb-0 pb-6 xl:relative xl:left-0 absolute lg:z-0 z-20 lg:left-10 xl:bottom-0 xl:top-0 lg:-top-[300px] sm:bottom-[144px] bottom-[144px]">
      <div className=" flex items-center justify-between lg:mb-12 md:mb-8 mb-6">
        <p className=" text-sm"> {isEditor} </p>
        <button className="rounded-lg text-sm" onClick={() => setIsEditor("")}>
          <SlideIcon />
        </button>
      </div>
      {renderFeatures(isEditor)}
    </section>
  );
};

export default FeaturesEditor;
