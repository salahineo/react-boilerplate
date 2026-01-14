import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/users.api';

export const userKeys = {
  all: ['users'] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
};

export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: getUsers,
  });
};
