import axios from "axios";

const axiosApi = axios.create();

axiosApi.interceptors.request.use(async config => {
  config.headers = {
    "X-Api-Factory-Application-Id": `${process.env["VUE_APP_API_FACTORY_ID"]}`,
    Accept: "application/json"
  };
  config.baseURL = "https://api-factory.simbirsoft1.com";
  return config;
});

export default axiosApi;
