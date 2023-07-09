export const fetchData = async (
  url: string,
  setMedia: any,
  setIsLoading: any
) => {
  try {
    setIsLoading("idl");
    const callApi = await fetch("api/repository", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    });

    const data = await callApi.json();
    setMedia(data);
    setIsLoading("success");
  } catch (error) {
    setIsLoading("error");
  }
};
