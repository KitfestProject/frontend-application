import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  eventId: null,
  selectedSeats: [], // Initial array of selected seats
};

export const useSeatStore = create(
  persist(
    (set, get) => ({
      ...initialState, // Spread initialState to initialize the store
      addSelectedSeat: (selectedData) =>
        set((state) => ({
          selectedSeats: [...state.selectedSeats, selectedData],
        })),
      removeSelectedSeat: (seatIdToRemove) =>
        set((state) => ({
          selectedSeats: state.selectedSeats.filter(
            (seat) => seat.seatId !== seatIdToRemove
          ),
        })),
      clearSeats: () =>
        set({
          selectedSeats: initialState.selectedSeats,
        }),
      setEventId: (eventId) => set({ eventId }),
    }),
    {
      name: "selected-seat-ticket",
    }
  )
);

// Get seatIds from selectedSeats
export const useGetSeatIds = () => {
  const selectedSeats = useSeatStore((state) => state.selectedSeats);
  return selectedSeats.map((seat) => seat.seatId);
};
