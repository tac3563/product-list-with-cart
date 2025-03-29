import {create} from "zustand/react";

 const useStore = create((set) => (
    {
        counter: 0,
        increment: () => set((state) => ({ counter: state.counter + 1})),
        decrement: () => set((state) => ({counter: state.counter - 1})),
    }
))

export default useStore;
