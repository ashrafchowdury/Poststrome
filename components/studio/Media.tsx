"use client";
import { useStudio } from "@/context/StudioContext";
import { Repository } from "./medias/Repository";
import GithubSkeleton from "../ui/skeletons/GithubSkeleton";

const Media = () => {
  const {
    media: { data },
    borders,
    mediaBg,
    mediaRef,
  } = useStudio();

  return (
    <section
      className=" bg-white w-[850px] h-[560px]"
      style={{
        borderRadius: `${borders.reduce + 3}px`,
      }}
      ref={mediaRef}
    >
      <div
        className="w-[850px] h-[560px] flex items-center justify-center overflow-hidden"
        style={{
          border: `${borders.border}px solid ${borders.color}`,
          borderRadius: `${borders.reduce}px`,
          background: mediaBg,
          backgroundColor: mediaBg.length > 6 ? "" : `#${mediaBg}`,
        }}
      >
        {data == undefined ? <GithubSkeleton /> : <Repository />}
      </div>
    </section>
  );
};

export default Media;
