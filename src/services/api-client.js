import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

class APIClient {
  endpoint;
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
