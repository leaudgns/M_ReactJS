import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   params: {
//     api_key: "049d659487094191953f86f21f376892",
//     language: "en-US",
//   },
// });

// api.get("tv/popular");

// export default api;
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "049d659487094191953f86f21f376892";
  config.params["language"] = "en-US";
  return config;
});
api.get("tv/popular");
export default api;
