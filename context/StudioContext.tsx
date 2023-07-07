"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode,
  useRef,
  Ref,
} from "react";
import { apiCaller } from "@/utils";

type SutdioContextType = {
  media: any;
  setMedia: Dispatch<SetStateAction<any>>;
  isDownload: boolean;
  setIsDownload: Dispatch<SetStateAction<boolean>>;
  isError: string;
  setIsError: Dispatch<SetStateAction<string>>;
  mediaBg: string;
  setMediaBg: Dispatch<SetStateAction<string>>;
  mediaTheme: string;
  setMediaTheme: Dispatch<SetStateAction<string>>;
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  mediaSizes: { width: string; height: string };
  setMediaSizes: Dispatch<SetStateAction<{ width: string; height: string }>>;
  mediaScale: number;
  setMediaScale: Dispatch<SetStateAction<number>>;
  borders: { border: number; reduce: number; color: string };
  setBorders: Dispatch<
    SetStateAction<{ border: number; reduce: number; color: string }>
  >;
  mediaRename: string;
  setMediaRename: Dispatch<SetStateAction<string>>;
  mediaShadow: number;
  setMediaShadow: Dispatch<SetStateAction<number>>;
  mediaTemplates: string;
  setMediaTemplates: Dispatch<SetStateAction<string>>;
  isEditor: string;
  setIsEditor: Dispatch<SetStateAction<string>>;
  mediaRef: Ref<HTMLElement>;
};

type ChildrenType = {
  children: ReactNode;
};

export const SutdioContext = createContext<SutdioContextType | null>(null);
export const useStudio = () => useContext(SutdioContext)!;

const StudioContextProvider: FC<ChildrenType> = ({ children }) => {
  const [media, setMedia] = useState({});
  const [isDownload, setIsDownload] = useState(false);
  const [isError, setIsError] = useState("");
  const [mediaBg, setMediaBg] = useState(
    "linear-gradient(90deg, rgb(168, 255, 120), rgb(120, 255, 214))"
  );
  const [mediaTheme, setMediaTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [mediaSizes, setMediaSizes] = useState({
    width: "680px",
    height: "auto",
  });
  const [mediaScale, setMediaScale] = useState(1);
  const [borders, setBorders] = useState({
    border: 0,
    reduce: 12,
    color: "#FFFFFF",
  });
  const [mediaShadow, setMediaShadow] = useState(0);
  const [mediaRename, setMediaRename] = useState("");
  const [mediaTemplates, setMediaTemplates] = useState("repository");
  const [isEditor, setIsEditor] = useState("Add");
  // refs
  const mediaRef = useRef(null);

  useEffect(() => {
    try {
      apiCaller(
        "api/repository",
        "https://github.com/ashrafchowdury/dotemd",
        setMedia
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value: SutdioContextType = {
    media,
    setMedia,
    isDownload,
    setIsDownload,
    isError,
    setIsError,
    mediaBg,
    setMediaBg,
    mediaTheme,
    setMediaTheme,
    mediaScale,
    setMediaScale,
    fontSize,
    setFontSize,
    mediaSizes,
    setMediaSizes,
    borders,
    setBorders,
    mediaRename,
    setMediaRename,
    mediaShadow,
    setMediaShadow,
    mediaTemplates,
    setMediaTemplates,
    isEditor,
    setIsEditor,
    mediaRef,
  };

  return (
    <SutdioContext.Provider value={value}>{children}</SutdioContext.Provider>
  );
};

export default StudioContextProvider;
