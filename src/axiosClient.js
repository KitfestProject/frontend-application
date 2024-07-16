import axios from "axios";
import useAuthStore from "@/store/UseAuthStore"; // Adjust the path as necessary

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_KITFT_API_PRODUCTION}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

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
