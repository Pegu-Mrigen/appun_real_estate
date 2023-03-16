import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// export const fetchApi = async (url) => {
//   const response = await axios.get(url, {
//     headers: {
//       "X-RapidAPI-Key": "6c3e46be06msh0dee95c0475ce2ep1b4eb2jsnbe61d69da9df",
//       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//     },
//   });
// };
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "6c3e46be06msh0dee95c0475ce2ep1b4eb2jsnbe61d69da9df",
    },
  });
  return data;
};
