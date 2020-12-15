import axios from "axios";
import { authHeader } from "./auth.header";
const url = "http://localhost:8000/apartments";
export const getAllApartments = async () => {
  const apartments = await axios({
    url: url,
    method: "get",
    headers: authHeader(),
  });
  return apartments;
};
export const getApartment = async (id) => {
  const apartment = await axios({
    url: url + id,
    method: "get",
    headers: authHeader(),
  });
  return apartment;
};
