const apiKey = import.meta.env.VITE_REACT_APP_PEXELS_API_KEY;
export async function gatherImages() {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=cats&per_page=9`,
    {
      method: "GET",

      headers: {
        Authorization: apiKey,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
