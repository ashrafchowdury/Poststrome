import domtoimage from "dom-to-image";

export const copyImage = async (
  mediaRef: any,
  setIsDownload: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const node = mediaRef.current;
  setIsDownload(true);
  let dataUrl = await domtoimage.toPng(node, { quality: 1 });
  const img = await fetch(dataUrl);
  const imgBlob = await img.blob();
  try {
    navigator.clipboard.write([
      new ClipboardItem({
        "image/png": imgBlob, // change image type accordingly
      }),
    ]);
    setIsDownload(false);
  } catch (error) {
    console.log(error);
  }
  return;
};
