import { useStudio } from "@/context/StudioContext";
import { GithubIcon, StarIcon } from "@/components/ui/Icons";

const Stars = () => {
  const {
    media: { data },
    mediaTheme,
    mediaShadow,
    mediaScale,
  } = useStudio();
  return (
    <div
      className={` w-[120px] h-[120px] rounded-xl relative flex items-center justify-center ${
        mediaTheme == "dark"
          ? "bg-slate-800 text-white"
          : "bg-slate-200 text-black"
      }`}
      style={{
        boxShadow: mediaShadow > 0 ? `4px 8px ${mediaShadow}px black` : "",
        transform: `scale(${mediaScale})`,
      }}
    >
      <div
        className={` flex items-center py-[2px] px-2 rounded-xl absolute -top-2 -right-5 text-sm font-bold shadow-md ${
          mediaTheme == "dark" ? "bg-slate-600 " : "bg-slate-300"
        }`}
      >
        <StarIcon style=" mr-[3px]" /> {data?.stargazers_count}
      </div>
      <GithubIcon style=" text-6xl " />
    </div>
  );
};

export default Stars;
