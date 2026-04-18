import { useState, useEffect } from "react";
const useFetchApi = (url) => {
  const [Datos, setFetchApi] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Status === "success") {
          setFetchApi(data.results);
        }
      });
  }, [url]);
  // console.log(Datos);
  return { Datos };
};

export default useFetchApi;
