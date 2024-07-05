import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Network response was not ok"); //La respuesta de la red no fue correcta
        }
        const json = await response.json();
        setData(json);
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    };

    fetchData()
  }, [url]);

  return {
    data, loading, error
  };
};
