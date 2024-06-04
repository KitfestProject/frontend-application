import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  showWelcomePopUp: true,
};

export const useWelcomePopUp = create(
  persist(
    (set) => ({
      ...initialState,
      setShowWelcomePopUp: (showWelcomePopUp) => set({ showWelcomePopUp }),
      hideWelcomePopUp: () => set({ showWelcomePopUp: false }),
    }),
    {
      name: "welcome-pop-up",
      getStorage: () => localStorage,
    }
  )
);
