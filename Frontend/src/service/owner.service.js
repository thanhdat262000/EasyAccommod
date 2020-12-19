import axios from "axios";
import { authHeader } from "./auth.header";
const ownerUrl = "http://localhost:8000/owner/apartments/";
export const postApartment = async (data) => {
  const response = await axios({
    url: ownerUrl + "post",
    method: "post",
    data: data,
    headers: authHeader(),
  });
  return response.status;
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
