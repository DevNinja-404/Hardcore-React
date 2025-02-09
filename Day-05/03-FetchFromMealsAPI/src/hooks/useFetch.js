import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    getMeals();
  }, [url]);
  return [data];
};

export default useFetch;
