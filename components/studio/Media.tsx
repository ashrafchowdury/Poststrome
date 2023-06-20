"use client";
import { useStudio } from "@/context/StudioContext";
import { Repository } from "./medias/Repository";
import GithubSkeleton from "../ui/skeletons/GithubSkeleton";

const Media = () => {
  const {
    media: { data },
    isLoading,
    borders,
    mediaBg,
  } = useStudio();

  return (
    <section
      className=" w-[800px] h-[530px] flex items-center justify-center"
      style={{
        border: `${borders.border}px solid ${borders.color}`,
        borderRadius: `${borders.reduce}px`,
        background: mediaBg,
        backgroundColor: `#${mediaBg}`,
      }}
    >
      {isLoading || data == undefined ? <GithubSkeleton /> : <Repository />}
    </section>
  );
};

export default Media;
