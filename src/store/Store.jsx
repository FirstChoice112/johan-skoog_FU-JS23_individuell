import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  // Funktion för att öka räknaren
  increment: () => set((state) => ({ count: state.count + 1 })),
  // Funktion för att minska räknaren
  decrement: () => set((state) => ({ count: state.count - 1 })),
  // Funktion för att återställa räknaren till noll
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
