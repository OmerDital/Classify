import { useEffect, useState } from 'react';
import axios from 'axios';

type UseMutation<T> = [T | undefined, boolean, Error | undefined];
type MutationType = 'post' | 'put';

const useMutation = <T>(url: string, mutationType: MutationType, dataToMutate: T)
  : UseMutation<T> => {
  const [isLoading, setIsIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState();

  useEffect(() => {
    const mutateData = async () => {
      try {
        const response = await axios[mutationType](`api/${url}`, dataToMutate);

        if (response) {
          setData(response.data);
        }
      } catch (e) {
        setError(error);
      } finally {
        setIsIsLoading(false);
      }
    };

    mutateData();
  }, []);

  return [data, isLoading, error];
};

export default useMutation;