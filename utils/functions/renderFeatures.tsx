import Backgorund from "@/components/studio/features/Backgorund";
import FontSize from "@/components/studio/features/FontSize";
import Theme from "@/components/studio/features/Theme";
import Border from "@/components/studio/features/Border";
import Rename from "@/components/studio/features/Rename";
import MediaSizes from "@/components/studio/features/MediaSizes";

export const renderFeatures = (isEditor: string) => {
  switch (isEditor) {
    case "Background":
      return <Backgorund />;
    case "Font Size":
      return <FontSize />;
    case "Theme":
      return <Theme />;
    case "Border":
      return <Border />;
    case "Rename":
      return <Rename />;
    case "Sizes":
      return <MediaSizes />;
    default:
      return <div>Invalid feature selected</div>;
  }
};
