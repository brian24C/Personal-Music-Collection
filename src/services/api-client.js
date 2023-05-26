import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// class APIClient {
//   endpoint;
//   constructor(endpoint) {
//     this.endpoint = endpoint;
//   }

//   getAll = async () => {
//     const res = await axiosInstance.get(this.endpoint);
//     return res.data;
//   };
// }

// export default APIClient;
