import axios from "axios";

const axiosApi = axios.create();

axiosApi.interceptors.request.use(async config => {
  config.headers = {
    "X-Api-Factory-Application-Id": `${process.env["VUE_APP_API_FACTORY_ID"]}`,
    Accept: "application/json"
  };
  return config;
});

export default axiosApi;
