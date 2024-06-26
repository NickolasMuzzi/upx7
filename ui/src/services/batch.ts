import { apiClient } from "../utils/consts";

export const createBatch = async (data: Record<string, unknown>) =>
  await apiClient.post(`/batch/`, data).then((res) => res.data);

export const findBatches = async () =>
  await apiClient
    .get(`/batch/findByEmail`, {
      params: { ownerEmail: localStorage.getItem("email") },
    })
    .then((res) => res.data);

export const findOwnerlessBatches = async () =>
  await apiClient
    .get(`/batch/findByEmail?ownerEmail=${null}`)
    .then((res) => res.data);

export const addOwnerToBatch = async (
  data: Record<string, unknown>,
  id: string
) =>
  await apiClient.put(`/batch/${id}`, { batch: data }).then((res) => res.data);
