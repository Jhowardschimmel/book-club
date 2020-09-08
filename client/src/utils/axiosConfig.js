import axios from "axios";
import Interceptors from "utils/Interceptors";

const BASEURL = "https://www.googleapis.com/books/v1";

const axiosClient = axios.create({
  baseURL: BASEURL,
});

//Register Request Interceptors
axiosClient.interceptors.request.use(Interceptors.logRequest);

//Register Response Interceptors
axiosClient.interceptors.response.use(Interceptors.logResponse);
axiosClient.interceptors.response.use(Interceptors.changeThumbToHTTPS);

export default axiosClient;
