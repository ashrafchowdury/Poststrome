import {
  BranchIcon,
  EyeIcon,
  ForkIcon,
  HashIcon,
  IssueIcon,
  LawIcon,
  LinkIcon,
  PrIcon,
  StarIcon,
} from "@/components/ui/Icons";
import Image from "next/image";
import { useStudio } from "@/context/StudioContext";

export const Repository = () => {
  const {
    media: { data },
    mediaRename,
    mediaTheme,
    mediaShadow,
    mediaScale,
  } = useStudio();

  const exLightTheme = mediaTheme == "dark" ? "glass" : "bg-slate-200"; //extra light theme
  const lightTheme = mediaTheme == "dark" ? "glass" : "bg-slate-300"; // light theme

  return (
    <>
      <main
        className={`rounded-xl  md:w-[620px] sm:w-[550px] w-[500px] ${
          mediaTheme == "dark"
            ? "bg-slate-800 text-white"
            : "bg-slate-200 text-black"
        } `}
        style={{
          boxShadow: mediaShadow > 0 ? `4px 8px ${mediaShadow}px black` : "",
          transform: `scale(${mediaScale})`,
        }}
      >
        <header
          className={`${
            mediaTheme == "dark" ? "bg-slate-900 " : "bg-slate-400"
          } w-full flex items-center justify-between md:mb-6 mb-4 px-4 py-[10px] rounded-t-xl`}
        >
          <div className="flex items-center justify-center space-x-2">
            <div
              className={`${exLightTheme} md:w-4 md:h-4 w-3 h-3 rounded-full`}
            ></div>
            <div
              className={`${exLightTheme} md:w-4 md:h-4 w-3 h-3 rounded-full`}
            ></div>
            <div
              className={`${exLightTheme} md:w-4 md:h-4 w-3 h-3 rounded-full`}
            ></div>
          </div>
          <div
            className={`${exLightTheme} rounded-lg py-[6px] px-10 md:text-xs text-[10px]`}
          >
            {data?.parent?.html_url?.replace("https://github.com/", "") ??
              "https://github.com"}
          </div>
          <div className="w-9"></div>
        </header>

        <section className="flex flex-col items-start px-4 md:mb-5 mb-3">
          <div className="text-[16px] flex items-center">
            {/* We are using normal img tag instead of Image component because the dom-to-image library dosen't support it */}
            <img
              src={data?.owner.avatar_url}
              alt="image"
              className=" md:w-6 md:h-6 w-5 h-5 rounded-full mr-2"
            />{" "}
            <span className=" font-medium md:text-[16px] text-sm">
              {data?.full_name}
            </span>
            <div className="ml-4 border border-neutral-600 text-[10px] py-[3px] px-3 rounded-full capitalize">
              {data?.visibility}
            </div>
          </div>
          <p className=" md:text-sm text-xs text md:mt-4 mt-3 md:mb-3 mb-2 font-light break-all text-inherit">
            {mediaRename ? mediaRename : data?.description}
          </p>

          <section>
            {data?.license.key && (
              <div className=" md:text-sm text-xs flex items-center my-3">
                <LawIcon style="text-[16px] mr-2" /> {data?.license.name}
              </div>
            )}

            <div className=" md:text-sm text-xs flex items-center my-3 capitalize">
              <BranchIcon style="text-[16px] mr-2" /> {data?.default_branch}
            </div>
            {data?.homepage && (
              <div className=" md:text-sm text-xs flex items-center my-3">
                <LinkIcon style="text-[16px] mr-2" /> {data?.homepage}
              </div>
            )}

            {data?.topics.length > 0 || data?.parent?.topics.length > 0 ? (
              <div className=" md:text-sm text-xs flex items-start my-3">
                <HashIcon style="text-lg mr-1 mt-1" />{" "}
                <div className="flex flex-wrap items-center">
                  {data?.parent?.topics ? (
                    <>
                      {data?.parent?.topics.map((topic: string) => {
                        return (
                          <div
                            key={topic}
                            className="border border-neutral-600 text-[10px] py-[1px] px-3 rounded-lg m-[3px]"
                          >
                            {topic}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {data?.topics.map((topic: string) => {
                        return (
                          <div
                            key={topic}
                            className="border border-neutral-600 text-[10px] py-[1px] px-3 rounded-lg m-[3px]"
                          >
                            {topic}
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </section>

          <div className={`${lightTheme} w-full h-[1px] md:my-3 my-1`}></div>

          {/* <p className="text-sm font-medium mt-1 mb-2">Matrics:</p> */}
          <section className="flex items-center flex-wrap justify-start mt-2">
            <div
              className={`${lightTheme} py-[5px] px-3 rounded-lg md:text-[13px] text-xs flex items-center m-1`}
            >
              <StarIcon style="text-sm mr-[6px]" /> Stars:{" "}
              {data?.stargazers_count}
            </div>
            <div
              className={`${lightTheme} py-[5px] px-3 rounded-lg md:text-[13px] text-xs flex items-center m-1`}
            >
              <ForkIcon style="text-sm mr-[6px]" /> Forks: {data?.forks}
            </div>
            <div
              className={`${lightTheme} py-[5px] px-3 rounded-lg md:text-[13px] text-xs flex items-center m-1`}
            >
              <EyeIcon style="text-sm mr-[6px]" /> Watchers:{" "}
              {data?.subscribers_count}
            </div>
            <div
              className={`${lightTheme} py-[5px] px-3 rounded-lg md:text-[13px] text-xs flex items-center m-1`}
            >
              <IssueIcon style="text-sm mr-[6px]" /> Issues: {data?.open_issues}
            </div>
            {/* <div className="glass py-[5px] px-3 rounded-lg md:text-[13px] text-xs flex items-center m-1">
            <PrIcon style="text-sm mr-[6px]" /> Pr Requests:{" "}
            {data?.open_issues_count}
          </div> */}
          </section>
        </section>
      </main>
    </>
  );
};
