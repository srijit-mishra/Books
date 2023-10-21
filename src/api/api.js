import axios from "axios";

const searchImages = async (query) => {
  const response = await axios
    .get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID STQV8mqh4slODvQ-uf5N32o6Mka_48x9x2SX6Kpy1k0",
      },
      params: {
        query: query,
        w: 800,
        h: 320,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return response.data.results;
};

export default searchImages;
