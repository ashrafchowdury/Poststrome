import { useStudio } from "@/context/StudioContext";
import { SlideIcon } from "../ui/Icons";
import { renderFeatures } from "@/utils/functions/renderFeatures";

const FeaturesEditor = () => {
  const { isEditor, setIsEditor } = useStudio();

  if (!isEditor) null;
  return (
    <section className="glass w-[280px] h-[74vh] rounded-xl -ml-8 pl-12 py-5 pr-4">
      <div className=" flex items-center justify-between mb-12">
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
