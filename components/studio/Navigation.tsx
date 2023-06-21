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

      <div className="flex items-center justify-between space-x-3">
        <Link
          href="https://github.com/ashrafchowdury/Poststrome"
          target="_blank"
        >
          <button className="glass w-[36px] h-[36px] rounded-lg flex items-center justify-center">
            <GithubIcon style="text-[16px]" />
          </button>
        </Link>
        <div className="glass w-[2px] h-7 mx-3"></div>
        <button className="glass w-[36px] h-[36px] rounded-lg flex items-center justify-center">
          <SaveIcon style="text-[16px]" />
        </button>
        <button
          className="glass w-[36px] h-[36px] rounded-lg flex items-center justify-center"
          onClick={() => copyImage(mediaRef, setIsDownload)}
          disabled={isDownload}
        >
          {isDownload ? (
            <LoadingIcon style="text-[16px] animate-spin" />
          ) : (
            <CopyIcon style="text-[16px]" />
          )}
        </button>

        <button
          className="glass w-[36px] h-[36px] rounded-lg flex items-center justify-center "
          onClick={() => downloadImage(mediaRef, setIsDownload)}
          disabled={isDownload}
        >
          {isDownload ? (
            <LoadingIcon style="text-[16px] animate-spin" />
          ) : (
            <DownloadIcon style="text-[16px]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
