import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://10.10.10.22:3008/",
  withCredentials: false,
  Accept: "application/json",
  "Content-Type": "application/json",
});

export default {
  getContactUs() {
    return apiClient.get("contactus");
  },
};
