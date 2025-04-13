import {create} from 'zustand';

type Store = {
    isOpen: {[id: string]: boolean},
    setIsOpen: (id: string) => void,
    counter: {[id: string]: number},
    increment: (id: string) => void,
    decrement: (id: string) => void
}

const useStore = create<Store>((set) => (
    {
        isOpen: {},
        setIsOpen: (id) => (
            set((state) => (
                {
                    isOpen: {
                        ...state.isOpen,
                        [id]: !!state.isOpen
                    }
                }
            ))
        ),
        counter: {},
        increment: (id) => (
            set((state) => ({
                counter: {
                    ...state.counter,
                    [id]: (state.counter[id] || 0) + 1
                }
            }))
        ),
        decrement: (id) => (
            set((state) => ({
                counter: {
                    ...state.counter,
                        [id]: (state.counter[id] !== 0 ? state.counter[id] - 1 : 0)
                }
            }))
        )
    }
))

export default useStore;