import axios from "axios";

const axiosApi = axios.create();

axiosApi.interceptors.request.use(async config => {
  config.headers = {
    "x-api-factory-application-id": `${process.env["VUE_API_FACTORY_ID"]}`,
    Accept: "application/json"
  };
  return config;
});

export default axiosApi;
