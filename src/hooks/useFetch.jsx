import { useCallback, useEffect, useState } from "react";

/**
 * A very small hook that fetches JSON from a URL.
 *
 * @param {string} url - The address to fetch data from.
 * @param {*} initialData - What the hook returns before the request finishes.
 * @returns {{data: any, loading: boolean, error: string|null, refetch: () => void}}
 */
const useFetch = (url, initialData) => {
  // What we got back from the server
  const [data, setData] = useState(initialData);

  // Are we waiting for the response?
  const [loading, setLoading] = useState(false);

  // Any problem that happened during fetch
  const [error, setError] = useState(null);

  // A stable refetch function that can be called again later
  const refetch = useCallback(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  // Run once when the URL changes
  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
};

export default useFetch;
