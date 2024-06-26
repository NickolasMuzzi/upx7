import { apiClient } from "../utils/consts";

export const createNewCompany = async (data: Record<string, unknown>) =>
  await apiClient.post(`/company/`, data).then((res) => res.data);

export const loginCompany = async (data: Record<string, unknown>) =>
  await apiClient.post(`/company/login`, data).then((res) => res.data);
