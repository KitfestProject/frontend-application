import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  user: null,
  token: null,
  jwt_token: null,
};

const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
      updateUser: (user) =>
        set((state) => ({ user: { ...state.user, ...user } })),
      setToken: (token) => set({ token: token }),
      setJwtToken: (token) => set({ jwt_token: token }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
