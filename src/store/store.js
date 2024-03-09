// import { createStore, useStore } from 'zustand';

// // Skapa en tillståndslagring
// const useMyStore = createStore((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

// // Använd tillståndet i en komponent
// function MyComponent() {
//   const { count, increment, decrement } = useMyStore();

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }
