import Backgorund from "@/components/studio/features/Backgorund";
import FontSize from "@/components/studio/features/FontSize";
import Theme from "@/components/studio/features/Theme";
import Border from "@/components/studio/features/Border";
import Rename from "@/components/studio/features/Rename";
import MediaSizes from "@/components/studio/features/MediaSizes";
import Add from "@/components/studio/features/Add";
import Shadow from "@/components/studio/features/Shadow";

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
    default:
      return <div>Invalid feature selected</div>;
  }
};
