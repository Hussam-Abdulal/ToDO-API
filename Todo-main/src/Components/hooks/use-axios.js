import axios from "axios";
import { useState, useCallback } from "react";



const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const axiosInstance = axios.create({
    baseURL: "https://random-todos.azurewebsites.net//todos",
    params: {
      apikey: " $2a$10$28/I3guwskRejVKpZ8wGZuRYRq4EZEMDUgfFT5perThadiRLcvina",
      amount: 10,
      randomdone: true,
    },
  });



  const fetchData = useCallback(
    async (url, method, headers, data = {}, params = {}) => {
      setLoading(true);
      setError(null);
     
      const source = axios.CancelToken.source();

      console.log("Attempting to fetch data with URL:", url);
      try {
        const result = await axiosInstance({
          url: "",
          method,
          headers,
          data,
          params,
         
          CancelToken: source.token,
        });
        setResponse(result.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.error("request cancelled", error.message);
        } else {
          setError(error.response ? error.response.data : error.message);
        }
      } finally {
        setLoading(false);
      }
    
      return () => {
        source.cancel("Operation canceled by the user.");
      };
    },
    [axiosInstance],
  );
  return { response, error, loading, fetchData };
};
export default useAxios;
