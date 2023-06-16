"use client";

import {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type SutdioContextType = {
  mediaBg: string;
  setMediaBg: Dispatch<SetStateAction<string>>;
  mediaTheme: string;
  setMediaTheme: Dispatch<SetStateAction<string>>;
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  mediaSizes: { width: string; height: string };
  setMediaSizes: Dispatch<SetStateAction<{ width: string; height: string }>>;
  borders: { border: number; reduce: number };
  setBorders: Dispatch<SetStateAction<{ border: number; reduce: number }>>;
  mediaRename: string;
  setMediaRename: Dispatch<SetStateAction<string>>;
  isEditor: string;
  setIsEditor: Dispatch<SetStateAction<string>>;
};

type ChildrenType = {
  children: ReactNode;
};

export const SutdioContext = createContext<SutdioContextType | null>(null);
export const useStudio = () => useContext(SutdioContext)!;

const StudioContextProvider: FC<ChildrenType> = ({ children }) => {
  const [mediaBg, setMediaBg] = useState("");
  const [mediaTheme, setMediaTheme] = useState("light");
  const [fontSize, setFontSize] = useState(16);
  const [mediaSizes, setMediaSizes] = useState({
    width: "680px",
    height: "auto",
  });
  const [borders, setBorders] = useState({
    border: 0,
    reduce: 12,
  });
  const [mediaRename, setMediaRename] = useState("");
  const [isEditor, setIsEditor] = useState("");
  const [searchData, setSearchData] = useState("");

  const value: SutdioContextType = {
    mediaBg,
    setMediaBg,
    mediaTheme,
    setMediaTheme,
    fontSize,
    setFontSize,
    mediaSizes,
    setMediaSizes,
    borders,
    setBorders,
    mediaRename,
    setMediaRename,
    isEditor,
    setIsEditor,
  };
  return (
    <SutdioContext.Provider value={value}>{children}</SutdioContext.Provider>
  );
};

export default StudioContextProvider;
