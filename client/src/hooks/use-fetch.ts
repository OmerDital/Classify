import { QueryKey, useQuery } from 'react-query';
import { axiosInstance } from '../utils/axios-instance';

type UseFetch<T> = [T | undefined, boolean, Error | null];

const useFetch = <T>(key: QueryKey, url: string) : UseFetch<T> => {
  const { isLoading, error, data } = useQuery<T, Error>(key, () => axiosInstance.get<T>(url)
    .then(({ data: fetchedData }) => fetchedData));

  return [data, isLoading, error];
};

export default useFetch;