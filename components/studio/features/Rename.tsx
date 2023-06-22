import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const Rename = () => {
  const { mediaRename, setMediaRename } = useStudio();
  return (
    <>
      <p className=" md:text-sm text-xs font-medium md:mb-4 mb-2">
        Rename Media
      </p>
      <textarea
        placeholder="Rewrite The Post"
        className=" md:text-sm text-xs bg-transparent outline-none focus:ring-2 focus:ring-neutral-200 w-full h-[120px] px-4 py-3 rounded-lg border-2 border-neutral-700 duration-200"
        value={mediaRename}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMediaRename(e.target.value)
        }
      ></textarea>
    </>
  );
};

export default Rename;
