import axios from "axios";
import { authHeader } from "./auth.header";
const url = "http://localhost:8000/apartments/";
const url2 = "http://localhost:8000/apartment/";
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
