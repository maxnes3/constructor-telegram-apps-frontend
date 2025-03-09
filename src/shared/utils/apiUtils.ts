import { Dispatch, SetStateAction } from 'react';

type createHandleQueryFnProps<T> = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<Error | null>>;
  setData: (data: T) => void;
  queryFn: () => Promise<T>;
};

export const createHandleQueryFn = <T>({
  setIsLoading,
  setError,
  setData,
  queryFn,
}: createHandleQueryFnProps<T>) => {
  return async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await queryFn();
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  };
};
