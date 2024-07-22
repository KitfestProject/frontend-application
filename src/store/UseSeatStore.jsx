import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  eventId: null,
  selectedSeats: [],
  timers: {},
};

export const useSeatStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      addSelectedSeat: (selectedData) => {
        const seatId = selectedData.seatId;
        const expirationTime = Date.now() + 5 * 60 * 1000; // 5-minute timer
        // console.log(seatId);

        set((state) => ({
          selectedSeats: [...state.selectedSeats, selectedData],
          timers: {
            ...state.timers,
            [seatId]: expirationTime,
          },
        }));
      },

      removeSelectedSeat: (seatIdToRemove) =>
        set((state) => ({
          selectedSeats: state.selectedSeats.filter(
            (seat) => seat.seatId !== seatIdToRemove
          ),
        })),

      clearSeats: () =>
        set({
          selectedSeats: initialState.selectedSeats,
          timers: initialState.timers,
        }),

      setEventId: (eventId) => set({ eventId }),

      setSeatTimer: (seatId, timer) =>
        set((state) => ({
          timers: {
            ...state.timers,
            [seatId]: timer,
          },
        })),

      clearExpiredSeats: () => {
        const now = Date.now();

        set((state) => {
          const newTimers = { ...state.timers };
          const newSelectedSeats = state.selectedSeats.filter((seat) => {
            if (newTimers[seat.seatId] <= now) {
              delete newTimers[seat.seatId];
              return false;
            }
            return true;
          });
          return { selectedSeats: newSelectedSeats, timers: newTimers };
        });
      },
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
