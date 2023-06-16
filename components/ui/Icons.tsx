import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTimes,
  FaRegEdit,
} from "react-icons/fa";
import {
  BsFolderCheck,
  BsDownload,
  BsLayoutSidebarInset,
  BsThreeDotsVertical,
  BsSearch,
  BsTrash,
  BsClipboard2,
  BsStars,
} from "react-icons/bs";
import { BiUndo, BiRedo } from "react-icons/bi";

type IconcType = {
  style?: string;
};

export const GithubIcon = ({ style }: IconcType) => {
  return <FaGithub className={`${style}`} />;
};

export const TwitterIcon = ({ style }: IconcType) => {
  return <FaTwitter className={`${style}`} />;
};

export const LinkedinIcon = ({ style }: IconcType) => {
  return <FaLinkedin className={`${style}`} />;
};

export const SaveIcon = ({ style }: IconcType) => {
  return <BsFolderCheck className={`${style}`} />;
};

export const DownloadIcon = ({ style }: IconcType) => {
  return <BsDownload className={`${style}`} />;
};

export const SlideIcon = ({ style }: IconcType) => {
  return <BsLayoutSidebarInset className={`${style}`} />;
};

export const DoteMenuIcon = ({ style }: IconcType) => {
  return <BsThreeDotsVertical className={`${style}`} />;
};

export const SearchIcon = ({ style }: IconcType) => {
  return <BsSearch className={`${style}`} />;
};

export const TrashIcon = ({ style }: IconcType) => {
  return <BsTrash className={`${style}`} />;
};

export const CopyIcon = ({ style }: IconcType) => {
  return <BsClipboard2 className={`${style}`} />;
};

export const CroseIcon = ({ style }: IconcType) => {
  return <FaTimes className={`${style}`} />;
};

export const EditIcon = ({ style }: IconcType) => {
  return <FaRegEdit className={`${style}`} />;
};

export const UndoIcon = ({ style }: IconcType) => {
  return <BiUndo className={`${style}`} />;
};

export const RedoIcon = ({ style }: IconcType) => {
  return <BiRedo className={`${style}`} />;
};

export const StarsIcon = ({ style }: IconcType) => {
  return <BsStars className={`${style}`} />;
};
