import {
  FontSize,
  Backgorund,
  Theme,
  Border,
  Rename,
  MediaSizes,
  Add,
  Shadow,
  Templates,
} from "@/components";

export const renderFeatures = (isEditor: string) => {
  switch (isEditor) {
    case "Background":
      return <Backgorund />;
    case "Theme":
      return <Theme />;
    case "Border":
      return <Border />;
    case "Rename":
      return <Rename />;
    case "Sizes":
      return <MediaSizes />;
    case "Add":
      return <Add />;
    case "Shadow":
      return <Shadow />;
    case "Templates":
      return <Templates />;
    default:
      return <div>Invalid feature selected</div>;
  }
};
