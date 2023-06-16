import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTimes,
  FaRegEdit,
  FaChessBoard,
  FaRedditAlien,
  FaFacebookF,
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
  BsBoundingBoxCircles,
  BsFullscreen,
  BsTextareaT,
  BsArrowClockwise,
  BsFillMoonStarsFill,
  BsSun,
  BsInstagram,
} from "react-icons/bs";
import { BiUndo, BiRedo, BiRename, BiAdjust } from "react-icons/bi";

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

export const InstaIcon = ({ style }: IconcType) => {
  return <BsInstagram className={`${style}`} />;
};

export const RedditIcon = ({ style }: IconcType) => {
  return <FaRedditAlien className={`${style}`} />;
};

export const FacebookIcon = ({ style }: IconcType) => {
  return <FaFacebookF className={`${style}`} />;
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

export const BgIcon = ({ style }: IconcType) => {
  return <FaChessBoard className={`${style}`} />;
};

export const BorderIcon = ({ style }: IconcType) => {
  return <BsBoundingBoxCircles className={`${style}`} />;
};

export const MediaSizeIcon = ({ style }: IconcType) => {
  return <BsFullscreen className={`${style}`} />;
};

export const FontSizeIcon = ({ style }: IconcType) => {
  return <BsTextareaT className={`${style}`} />;
};

export const RenameIcon = ({ style }: IconcType) => {
  return <BiRename className={`${style}`} />;
};

export const ThemeIcon = ({ style }: IconcType) => {
  return <BiAdjust className={`${style}`} />;
};

export const RotateIcon = ({ style }: IconcType) => {
  return <BsArrowClockwise className={`${style}`} />;
};

export const MoonIcon = ({ style }: IconcType) => {
  return <BsFillMoonStarsFill className={`${style}`} />;
};

export const SunIcon = ({ style }: IconcType) => {
  return <BsSun className={`${style}`} />;
};
