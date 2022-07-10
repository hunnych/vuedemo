import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  Accept: "application/json",
  "Content-Type": "application/json",
});

export default {
  getContactUs() {
    return apiClient.get("contactus");
  },
  AddContactUs(ContactUsData) {
    return apiClient.post("contactus", ContactUsData);
  },
  DeleteContactUs(id) {
    return apiClient.delete(`contactus/${id}`);
  },
  GetTravelPlaces() {
    return apiClient.get("places");
  },
};
