import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjE1ZGY0N2YyZjE5OTdkYjkzMTMwNGYxMWFlY2I3NyIsIm5iZiI6MTc1ODY5ODI4My41MTgwMDAxLCJzdWIiOiI2OGQzOWIyYjdmMGMxOThmMDM4M2ZmNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-Az41YRNnsa3dVAE0RPWZo_IDyipVOuVXVgJb5tFfRQ",
  },
  // params: {
  //   language: "ko-KR", // https://api.themoviedb.org/3/movie/nowPlaying?language=ko-KR"
  //
  // }
});
