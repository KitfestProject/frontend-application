import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_KITFT_API_PRODUCTION}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    console.error(response);

    throw error;
  }
);

export default axiosClient;
