import { useEffect, useState } from "react";

export default function useFetch<T>(category: string) {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjE1ZGY0N2YyZjE5OTdkYjkzMTMwNGYxMWFlY2I3NyIsIm5iZiI6MTc1ODY5ODI4My41MTgwMDAxLCJzdWIiOiI2OGQzOWIyYjdmMGMxOThmMDM4M2ZmNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-Az41YRNnsa3dVAE0RPWZo_IDyipVOuVXVgJb5tFfRQ",
      },
    };

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          options
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setData(data.results);
      } catch (e) {
        setError(e instanceof Error ? e.message : "unknown error")
      }
      finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  return {data, isLoading, error}
}
