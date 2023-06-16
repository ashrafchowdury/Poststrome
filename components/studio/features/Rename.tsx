import { ChangeEvent } from "react";
import { useStudio } from "@/context/StudioContext";

const Rename = () => {
  const { mediaRename, setMediaRename } = useStudio();
  return (
    <>
      <p className=" text-sm font-medium mb-4">Rename Media</p>
      <textarea
        placeholder="Rewrite The Post"
        className=" bg-transparent outline-none text-sm w-full h-[120px] px-4 py-3 rounded-lg border-2 border-neutral-700"
        value={mediaRename}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMediaRename(e.target.value)
        }
      ></textarea>
    </>
  );
};

export default Rename;
