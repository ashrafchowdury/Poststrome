import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export const downloadImage = async (
  mediaRef: any,
  setIsDownload: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const node = mediaRef.current;
  // image style
  const style = {
    transform: "scale(1.8)",
    transformOrigin: "top left",
    left: "0px",
    height: "auto",
    width: "auto",
  };
  const param = {
    quality: 1,
    height: node.offsetHeight * 1.8,
    width: node.offsetWidth * 1.8,
    style,
  };
  //image download
  try {
    setIsDownload(true); // show the loading icon
    let dataUrl = await domtoimage.toPng(node, param);
    saveAs(dataUrl, `poststrome.png`);
    setIsDownload(false);
    return;
  } catch (error) {
    console.log(error);
  }
};
