import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  eventId: null,
  selectedSeats: [],
  selectedTickets: [],
  timers: {},
};

export const useSeatStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      addSelectedSeat: (selectedData) => {
        const seatId = selectedData.seatId;
        const expirationTime = Date.now() + 5 * 60 * 1000; // 5-minute timer

        set((state) => ({
          selectedSeats: [...state.selectedSeats, selectedData],
          timers: {
            ...state.timers,
            [seatId]: expirationTime,
          },
        }));
      },

      addSelectedTickets: (selectedData) => {
        const ticketId = selectedData.id;
        set((state) => {
          const ticketExists = state.selectedTickets.some(
            (ticket) => ticket.id === ticketId
          );

          if (ticketExists) {
            return state;
          }

          return {
            selectedTickets: [...state.selectedTickets, selectedData],
          };
        });
      },

      removeSelectedSeat: (seatIdToRemove) =>
        set((state) => ({
          selectedSeats: state.selectedSeats.filter(
            (seat) => seat._id !== seatIdToRemove
          ),
        })),

      removeSelectedTicket: (ticketIdToRemove) =>
        set((state) => ({
          selectedTickets: state.selectedTickets.filter(
            (ticket) => ticket.id !== ticketIdToRemove
          ),
        })),

      clearSeats: () =>
        set({
          selectedSeats: initialState.selectedSeats,
          timers: initialState.timers,
        }),

      clearTickets: () =>
        set({
          selectedTickets: initialState.selectedTickets,
        }),

      setEventId: (eventId) => set({ eventId }),

      setSeatTimer: (seatId, timer) =>
        set((state) => ({
          timers: {
            ...state.timers,
            [seatId]: timer,
          },
        })),

      clearSeatStore: () => set(initialState),

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
