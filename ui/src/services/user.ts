import { apiClient } from "../utils/consts";

export const createNewPerson = async (data: Record<string, unknown>) =>
  await apiClient.post(`/users/`, data).then((res) => res.data);

export const loginUser = async (data: Record<string, unknown>) =>
  await apiClient.post(`/users/login`, data).then((res) => res.data);
