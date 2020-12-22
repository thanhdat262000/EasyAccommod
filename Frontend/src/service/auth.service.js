import axios from "axios";
import jwt from "jsonwebtoken";
require("dotenv").config();
const url = "http://localhost:8000/";

export const checkEmail = async (email) => {
  const data = { email: email };
  const response = await axios({
    method: "post",
    url: url + "register/checkEmail",
    data: data,
  });
  return response.data;
};
export const register = async (data) => {
  const response = await axios.post(url + "register/", data);
  return response.data;
};
export const login = async (data) => {
  const response = await axios.post(url + "signin/", data);
  return response.data;
};
export const logout = () => {
  localStorage.removeItem("token");
  window.location.reload(false);
};
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};
export const decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.REACT_APP_JWT_KEY);
  return decoded.data;
};
