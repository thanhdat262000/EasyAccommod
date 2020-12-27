import axios from "axios";
import { authHeader } from "./auth.header";
const adminUrl = "http://localhost:8000/admin/";
export const getApprovedAllOwners = async () => {
  const response = await axios({
    url: adminUrl + "allApprovedOwners",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getPendingAllOwners = async () => {
  const response = await axios({
    url: adminUrl + "allPendingOwners",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const approveOwner = async (id) => {
  const response = await axios({
    url: adminUrl + "owner/" + id + "/approved",
    method: "put",
    headers: authHeader(),
  });
  return response.status;
};
export const getApprovedPosts = async () => {
  const response = await axios({
    url: adminUrl + "apartments/approved",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getPendingPosts = async () => {
  const response = await axios({
    url: adminUrl + "apartments/pending",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const getDisapprovedPosts = async () => {
  const response = await axios({
    url: adminUrl + "apartments/disapproved",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
export const approvePost = async (id) => {
  const response = await axios({
    url: adminUrl + "apartments/" + id + "/approved",
    method: "put",
    headers: authHeader(),
  });
  return response.status;
};
export const disapprovePost = async (id) => {
  const response = await axios({
    url: adminUrl + "apartments/" + id + "/disapproved",
    method: "put",
    headers: authHeader(),
  });
  return response.status;
};
