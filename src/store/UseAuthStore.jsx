import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  user: null,
  token: null,
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
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
