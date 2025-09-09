// hooks/useApi.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../utils/apiRequests';

export const useApi = ({ key, url, options = {} }) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => apiRequest({ url, method: 'GET' }),
    ...options,
  });
};

export const useMutationApi = ({ url, method }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body) => apiRequest({ url, method, body }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
