import axios from "axios";
export default {
  newUser: (data) => {
    return axios.post("/api/user/create", data);
  },
  loginUser: (data) => {
    return axios.post("/api/user/create", data);
  },
  deleteUser: (data) => {
    return axios.delete("/api/user/delete", data);
  },
  getAllUsers: () => {
    return axios.get("/api/user/getall");
  },
  updateCredentials: (data) => {
    return axios.put("/api/user/update", data);
  },
  updateCard: (params, data) => {
    return axios.post("/api/accounts/" + params + "/information", data);
  },
  getAllUserInfo: (params) => {
    return axios.get("/api/accounts/" + params + "/information");
  },
  getAllUserContacts: (params) => {
    return axios.get("/api/accounts/" + params + "/contacts");
  },
  getAllAccounts: (params) => {
    return axios.get("/api/accounts/" + params);
  },
  addContact: (params, data) => {
    return axios.put("/api/accounts/" + params + "/contacts/add", data);
  },
  deleteContact: (params, data) => {
    return axios.put("/api/accounts/" + params + "/contacts/add", data);
  },
};
