const axios = require("axios");
const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "20",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchVideos = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
/* How to use Axios */
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
