import { useState } from 'react';

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false);

  const withLoading = async (asyncFunc) => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      return await asyncFunc();
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, withLoading };
};
