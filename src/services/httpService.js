import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://liveresultat.orientering.se/api.php";

axios.interceptors.response.use(null, error => {
  const expecedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expecedError) {
    logger.log("Error log: " + error);
    toast.error("An unexpected error occurred");
  }

  return Promise.reject(error);
});

function setBaseURL(url) {
  axios.defaults.baseURL = url;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setBaseURL
};
