import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (err) => {
  const errors =
    err.response && err.response.status > 400 && err.response.status <= 500;
    if(errors){
        toast.error("Internal Server Error");
    }
   return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
};
