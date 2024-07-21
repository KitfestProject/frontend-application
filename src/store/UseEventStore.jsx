import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  eventId: null,
};

export const useEventStore = create(
  persist(
    (set) => ({
      ...initialState,
      setEventId: (id) =>
        set((state) => ({
          eventId: id,
        })),
    }),
    {
      name: "booked-event-id",
    }
  )
);
