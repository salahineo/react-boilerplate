import { apiClient } from '@/app/config/axios';
import type { User } from '../types/users.types';

export const getUsers = async (): Promise<User[]> => {
  return apiClient.get('/users');
};

export const getUserById = async (id: number): Promise<User> => {
  return apiClient.get(`/users/${id}`);
};
