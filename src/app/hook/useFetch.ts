import { useEffect, useState } from "react";

interface FetchOptions {
  page?: number;
  limit?: number;
  search?: string;
}

export const useFetch = (
  url: string,
  { page = 1, limit = 5, search = "" }: FetchOptions,
) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}?_page=${page}&_limit=${limit}&q=${search}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const totalItems = response.headers.get("X-Total-Count") || "100";
        setTotalPages(Math.ceil(parseInt(totalItems) / limit));

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, page, limit, search]);

  return { data, error, isLoading, totalPages };
};
