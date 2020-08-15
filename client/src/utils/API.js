import axios from "axios";
export default {
  // Needed sign-up -
  newUser: (data) => {
    return axios.post("/api/user/create", data);
  },
  // login page -
  loginUser: (data) => {
    return axios.post("/api/user/login", data);
  },
  // edit user info page
  deleteUser: (data) => {
    return axios.delete("/api/user/delete", data);
  },
  //network page -
  getAllUsers: () => {
    return axios.get("/api/user/getall");
  },
  // updating email and user password
  updateCredentials: (data) => {
    return axios.put("/api/user/update", data);
  },
  // creating profile card page
  updateCard: (params, data) => {
    return axios.put("/api/accounts/" + params + "/information", data);
  },
  // profile pages user card -
  getAllUserInfo: (params) => {
    return axios.get("/api/accounts/" + params + "/information");
  },
  // profile page contacts -
  getAllUserContacts: (params) => {
    return axios.get("/api/accounts/" + params + "/contacts");
  },
  // profile page primary
  getAllAccounts: (params) => {
    return axios.get("/api/accounts/" + params);
  },
  // someone follows someone
  addContact: (params, data) => {
    return axios.put("/api/accounts/" + params + "/contacts/add", data);
  },
  // someone unfollows someone
  deleteContact: (params, data) => {
    return axios.put("/api/accounts/" + params + "/contacts/add", data);
  },
};
