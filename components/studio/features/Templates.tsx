import { useStudio } from "@/context/StudioContext";
import { TemplateIcon, StarIcon } from "../../ui/Icons";

const Templates = () => {
  const { mediaTemplates, setMediaTemplates } = useStudio();

  const templates = [
    { title: "repository", icon: TemplateIcon },
    { title: "star", icon: StarIcon },
  ];
  return (
    <>
      <p className=" md:text-sm text-xs font-medium mb-4">Media Theme</p>
      <div className=" flex items-center">
        {templates.map((data, ind) => {
          return (
            <div className=" flex flex-col items-center mr-4 my-2" key={ind}>
              <button
                className={`${
                  data.title == mediaTemplates && "ring-2 ring-neutral-200"
                } glass md:w-[37px] md:h-[37px] w-8 h-8 rounded-lg flex items-center justify-center`}
                onClick={() => setMediaTemplates(data.title)}
              >
                <data.icon />
              </button>
              <p className=" text-[10px] mt-2 capitalize">{data.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Templates;
