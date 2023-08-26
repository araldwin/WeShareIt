import axios from "axios";

axios.defaults.baseURL = "https://wsiapi2023-b84941ad1c92.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
