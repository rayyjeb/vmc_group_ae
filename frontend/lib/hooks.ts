'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Generic query hook for fetching data
export function useDataQuery<T>(
  queryKey: string[],
  fetchFn: () => Promise<T>,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    gcTime?: number;
  }
) {
  return useQuery({
    queryKey,
    queryFn: fetchFn,
    enabled: options?.enabled ?? true,
    staleTime: options?.staleTime,
    gcTime: options?.gcTime,
  });
}

// Generic mutation hook for updating data
export function useDataMutation<T, V>(
  mutationFn: (data: V) => Promise<T>,
  options?: {
    onSuccess?: (data: T, variables: V) => void;
    onError?: (error: Error, variables: V) => void;
    onSettled?: (data: T | undefined, error: Error | null, variables: V) => void;
  }
) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn,
    onSuccess: (data, variables) => {
      // Invalidate and refetch relevant queries
      queryClient.invalidateQueries();
      options?.onSuccess?.(data, variables);
    },
    onError: options?.onError,
    onSettled: options?.onSettled,
  });
}

// Hook for invalidating specific queries
export function useInvalidateQueries() {
  const queryClient = useQueryClient();
  
  return {
    invalidateQueries: (queryKey?: string[]) => {
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey });
      } else {
        queryClient.invalidateQueries();
      }
    },
    removeQueries: (queryKey?: string[]) => {
      if (queryKey) {
        queryClient.removeQueries({ queryKey });
      } else {
        queryClient.removeQueries();
      }
    },
  };
}
