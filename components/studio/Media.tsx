"use client";
import { useStudio } from "@/context/StudioContext";
import { Repository } from "./medias/Repository";

const Media = () => {
  const { borders, mediaBg } = useStudio();

  return (
    <section
      className=" w-[800px] h-[520px] flex items-center justify-center"
      style={{
        border: `${borders.border}px solid white`,
        borderRadius: `${borders.reduce}px`,
        background: mediaBg,
        backgroundColor: `#${mediaBg}`,
      }}
    >
      <Repository />
    </section>
  );
};

export default Media;
