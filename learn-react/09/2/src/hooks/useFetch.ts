import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setdata] = useState<T | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setdata(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
