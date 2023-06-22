"use client";

import Logo from "../ui/Logo";
import {
  DownloadIcon,
  CopyIcon,
  GithubIcon,
  SaveIcon,
  LoadingIcon,
} from "../ui/Icons";
import { useStudio } from "@/context/StudioContext";
import { downloadImage } from "@/utils/functions/downloadImage";
import { copyImage } from "@/utils/functions/copyImage";
import Link from "next/link";

const Navigation = () => {
  const { mediaRef, isDownload, setIsDownload } = useStudio();
  return (
    <nav className=" w-full md:h-[120px] h-[100px] flex items-center justify-between">
      <Logo />

      <div className="flex items-center justify-between md:space-x-3 space-x-2">
        <Link
          href="https://github.com/ashrafchowdury/Poststrome"
          target="_blank"
        >
          <button className="glass md:w-[36px] md:h-[36px] w-[30px] h-[30px] rounded-lg flex items-center justify-center">
            <GithubIcon style="md:text-[16px] text-sm" />
          </button>
        </Link>
        <div className="glass w-[2px] md:h-7 h-5 md:mx-3 mx-2"></div>
        <button className="glass md:w-[36px] md:h-[36px] w-[30px] h-[30px] rounded-lg flex items-center justify-center">
          <SaveIcon style="md:text-[16px] text-sm" />
        </button>
        <button
          className="glass md:w-[36px] md:h-[36px] w-[30px] h-[30px] rounded-lg flex items-center justify-center"
          onClick={() => copyImage(mediaRef, setIsDownload)}
          disabled={isDownload}
        >
          {isDownload ? (
            <LoadingIcon style="md:text-[16px] text-sm animate-spin" />
          ) : (
            <CopyIcon style="md:text-[16px] text-sm" />
          )}
        </button>

        <button
          className="glass md:w-[36px] md:h-[36px] w-[30px] h-[30px] rounded-lg flex items-center justify-center "
          onClick={() => downloadImage(mediaRef, setIsDownload)}
          disabled={isDownload}
        >
          {isDownload ? (
            <LoadingIcon style="md:text-[16px] text-sm animate-spin" />
          ) : (
            <DownloadIcon style="md:text-[16px] text-sm" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
