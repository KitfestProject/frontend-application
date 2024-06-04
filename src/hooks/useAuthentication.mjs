import axiosClient from "../axiosClient";
import useAuthStore from "../store/UseAuthStore";

const useAuthentication = () => {
  const { login } = useAuthStore();

  // Login user function
  const loginUser = async (loginData) => {
    try {
      await axiosClient.post("/users/sign_in", loginData).then((response) => {
        const { data } = response.data;
        login(data, data.token);
        console.log(data);
        return true;
      });
    } catch (error) {
      return error;
    }
  };

  // Register user function
  const registerUser = async (registerData) => {
    try {
      const response = await axiosClient.post("/users/sign_up", registerData);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { loginUser, registerUser };
};

export default useAuthentication;
