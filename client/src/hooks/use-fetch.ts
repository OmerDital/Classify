import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios-instance';

type UseFetch<T> = [T | undefined, boolean, Error | undefined];

const useFetch = <T>(url: string, defaultValue?: T): UseFetch<T> => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<T>(`api/${url}`);

        if (response) {
          setData(response.data);
        }
      } catch (e) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, isLoading, error];
};

export default useFetch;