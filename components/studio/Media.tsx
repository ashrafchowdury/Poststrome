"use client";
import { useStudio } from "@/context/StudioContext";
import { GithubSkeleton } from "../skeletons";
import { renderTemplates } from "@/utils";

const Media = () => {
  const {
    media: { data },
    borders,
    mediaBg,
    mediaRef,
    mediaTemplates,
    isLoading,
  } = useStudio();

  return (
    <section
      className=" bg-white xl:w-[850px] xl:h-[560px] md:w-[800px] md:h-[520px] sm:w-[700px] sm:h-[450px] w-[600px] h-[420px] lg:scale-100 md:scale-[0.8] sm:scale-[0.7] scale-[0.5]"
      style={{
        borderRadius: `${borders.reduce + 3}px`,
      }}
      ref={mediaRef}
    >
      <div
        className="xl:w-[850px] xl:h-[560px] md:w-[800px] md:h-[520px] sm:w-[700px] sm:h-[450px] w-[600px] h-[420px] flex items-center justify-center overflow-hidden"
        style={{
          border: `${borders.border}px solid ${borders.color}`,
          borderRadius: `${borders.reduce}px`,
          background: mediaBg,
          backgroundColor: mediaBg.length > 6 ? "" : `#${mediaBg}`,
        }}
      >
        {isLoading == "idl" ? (
          <GithubSkeleton />
        ) : (
          <>
            {isLoading == "error" ? (
              <p className=" font-bold text-xl text-center text-black">
                Something went wrong!
              </p>
            ) : (
              renderTemplates(mediaTemplates)
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Media;
