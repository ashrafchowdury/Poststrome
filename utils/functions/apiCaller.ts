export const apiCaller = async (
  req: string,
  mediaUrl: string,
  setMedia: any
) => {
  const callApi = await fetch(req, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mediaUrl),
  });
  const data = await callApi.json();
  setMedia(data);
};
