import {
  QueryKey, UseMutateFunction, useMutation, useQueryClient
} from 'react-query';
import { axiosInstance } from '../utils/axios-instance';

type UsePost = [UseMutateFunction<unknown, Error, unknown>, boolean, Error | null];

const useMutate = (key: QueryKey, url: string, method: 'post' | 'put'): UsePost => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isLoading,
    error
  } = useMutation<unknown, Error, unknown>(key, data => axiosInstance[method](url, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });

  return [mutate, isLoading, error];
};

export default useMutate;