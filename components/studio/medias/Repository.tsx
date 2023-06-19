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
  } = useStudio();

  if (data == undefined) {
    return null;
  }
  return (
    <main className=" rounded-xl bg-slate-800 w-[620px]">
      <header className=" bg-slate-900 w-full flex items-center justify-between mb-6 px-4 py-[10px] rounded-t-xl">
        <div className="flex items-center justify-center space-x-2">
          <div className="glass w-4 h-4 rounded-full"></div>
          <div className="glass w-4 h-4 rounded-full"></div>
          <div className="glass w-4 h-4 rounded-full"></div>
        </div>
        <div className="glass rounded-xl py-[6px] px-10 text-xs">
          {data?.parent?.html_url?.replace("https://github.com/", "") ??
            "https://github.com"}
        </div>
        <div className="w-9"></div>
      </header>

      <section className="flex flex-col items-start px-4 mb-5">
        <div className="text-[16px] flex items-center">
          <Image
            src={data.owner.avatar_url}
            alt="image"
            width={24}
            height={24}
            className=" rounded-full mr-2"
          />{" "}
          <span className=" font-medium">{data.full_name}</span>
          <div className="ml-4 border border-neutral-600 text-[10px] py-[3px] px-3 rounded-full capitalize">
            {data.visibility}
          </div>
        </div>
        <p className=" text-sm mt-4 mb-3 font-light break-all">
          {mediaRename ? mediaRename : data.description}
        </p>

        <section>
          {data.license.key && (
            <div className=" text-sm flex items-center my-3">
              <LawIcon style="text-[16px] mr-2" /> {data.license.name}
            </div>
          )}

          <div className=" text-sm flex items-center my-3 capitalize">
            <BranchIcon style="text-[16px] mr-2" /> {data.default_branch}
          </div>
          {data.homepage && (
            <div className=" text-sm flex items-center my-3">
              <LinkIcon style="text-[16px] mr-2" /> {data.homepage}
            </div>
          )}

          <div className=" text-sm flex items-start my-3">
            <HashIcon style="text-[16px] mr-1 mt-1" />{" "}
            <div className="flex flex-wrap items-center">
              {(data.topics || data?.parent?.topics) && (
                <>
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
                      {data.topics.map((topic: string) => {
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
                </>
              )}
            </div>
          </div>
        </section>

        <div className="glass w-full h-[1px] my-3"></div>

        {/* <p className="text-sm font-medium mt-1 mb-2">Matrics:</p> */}
        <section className="flex items-center flex-wrap justify-start mt-2">
          <div className="glass py-[5px] px-3 rounded-lg text-[13px] flex items-center m-1">
            <StarIcon style="text-sm mr-[6px]" /> Stars: {data.stargazers_count}
          </div>
          <div className="glass py-[5px] px-3 rounded-lg text-[13px] flex items-center m-1">
            <ForkIcon style="text-sm mr-[6px]" /> Forks: {data.forks}
          </div>
          <div className="glass py-[5px] px-3 rounded-lg text-[13px] flex items-center m-1">
            <EyeIcon style="text-sm mr-[6px]" /> Watchers:{" "}
            {data.subscribers_count}
          </div>
          <div className="glass py-[5px] px-3 rounded-lg text-[13px] flex items-center m-1">
            <IssueIcon style="text-sm mr-[6px]" /> Issues: {data.open_issues}
          </div>
          {/* <div className="glass py-[5px] px-3 rounded-lg text-[13px] flex items-center m-1">
            <PrIcon style="text-sm mr-[6px]" /> Pr Requests:{" "}
            {data.open_issues_count}
          </div> */}
        </section>
      </section>
    </main>
  );
};