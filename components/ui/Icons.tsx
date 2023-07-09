import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
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
  BsEye,
  BsLayersHalf,
  BsWindowFullscreen,
  BsCardImage,
} from "react-icons/bs";
import {
  BiUndo,
  BiRedo,
  BiRename,
  BiAdjust,
  BiGitPullRequest,
  BiGitRepoForked,
  BiDisc,
  BiStar,
  BiGitBranch,
  BiLinkExternal,
  BiHash,
  BiPlus,
  BiLoader,
} from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { FcAddImage, FcFolder, FcFlashOn } from "react-icons/fc";

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

export const AddIcon = ({ style }: IconcType) => {
  return <BiPlus className={`${style}`} />;
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

export const ForkIcon = ({ style }: IconcType) => {
  return <BiGitRepoForked className={`${style}`} />;
};

export const EyeIcon = ({ style }: IconcType) => {
  return <BsEye className={`${style}`} />;
};

export const StarIcon = ({ style }: IconcType) => {
  return <BiStar className={`${style}`} />;
};

export const LawIcon = ({ style }: IconcType) => {
  return <GoLaw className={`${style}`} />;
};

export const IssueIcon = ({ style }: IconcType) => {
  return <BiDisc className={`${style}`} />;
};

export const PrIcon = ({ style }: IconcType) => {
  return <BiGitPullRequest className={`${style}`} />;
};

export const BranchIcon = ({ style }: IconcType) => {
  return <BiGitBranch className={`${style}`} />;
};

export const LinkIcon = ({ style }: IconcType) => {
  return <BiLinkExternal className={`${style}`} />;
};

export const HashIcon = ({ style }: IconcType) => {
  return <BiHash className={`${style}`} />;
};

export const ShadowIcon = ({ style }: IconcType) => {
  return <BsLayersHalf className={`${style}`} />;
};

export const LoadingIcon = ({ style }: IconcType) => {
  return <BiLoader className={`${style}`} />;
};

export const TemplateIcon = ({ style }: IconcType) => {
  return <BsWindowFullscreen className={`${style}`} />;
};

export const ColorImageIcon = ({ style }: IconcType) => {
  return <FcAddImage className={`${style}`} />;
};

export const ColorFolderIcon = ({ style }: IconcType) => {
  return <FcFolder className={`${style}`} />;
};

export const ColorFlashIcon = ({ style }: IconcType) => {
  return <FcFlashOn className={`${style}`} />;
};
