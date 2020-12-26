import axios from "axios";
import { authHeader } from "./auth.header";
const adminUrl = "http://localhost:8000/admin/";
export const getAllOwners = async () => {
  const response = await axios({
    url: adminUrl + "allOwners",
    method: "get",
    headers: authHeader(),
  });
  return response.data;
};
