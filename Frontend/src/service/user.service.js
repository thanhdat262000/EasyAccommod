import axios from "axios";
import { authHeader } from "./auth.header";
const url = "http://localhost:8000/apartments/";
const url2 = "http://localhost:8000/apartment/";
const ownerUrl = "http://localhost:8000/owner/apartments/";
export const getAllApartments = async () => {
  const response = await axios({
    url: url,
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getApartment = async (id) => {
  const response = await axios({
    url: url2 + id,
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const favorite = async (id) => {
  const response = await axios({
    url: url2 + id + "/favorite",
    method: "post",
    headers: authHeader(),
  });
  return response.data;
};
export const comment = async (id, comment) => {
  const response = await axios({
    url: url2 + id + "/comment",
    data: comment,
    method: "post",
    headers: authHeader(),
  });
  return response.status;
};
export const getAllFavorite = async () => {
  const response = axios({
    url: url + "favorite",
    method: "get",
    headers: authHeader(),
  });
  return (await response).data;
};
export const search = async (query) => {
  const response = await axios({
    url: url,
    method: "get",
    params: query,
  });
  return response.data;
};
export const getApprovedApartments = async () => {
  const response = await axios({
    url: ownerUrl + "approved",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getPendingApartments = async () => {
  const response = await axios({
    url: ownerUrl + "pending",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getRentedApartments = async () => {
  const response = await axios({
    url: ownerUrl + "rented",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getExpiredApartments = async () => {
  const response = await axios({
    url: ownerUrl + "expired",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
