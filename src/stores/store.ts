import {create} from 'zustand';

type Store = {
    isOpen: {[id: string]: boolean},
    setIsOpen: (id: string) => void,
    counters: {[id: string]: number},
    increment: (id:string) => void,
    decrement: (id:string) => void
}

const useStore = create<Store>((set) => (
    {
        isOpen: {},
        setIsOpen: (id) => (
            set(state => ({
                isOpen: {
                    ...state.isOpen,
                  [id]: !state.isOpen[id]
                }
            })
        )),
        counters: {},
        increment: (id) => (
            set((state) => ({
                    counters: {
                        ...state.counters,
                        [id]: (state.counters[id] || 0) + 1,
                    }
                }
            ))
        ),
        decrement: (id) => (
            set((state) => (
                {
                    counters: {
                        ...state.counters,
                        [id]: state.counters[id] > 0 ? state.counters[id] - 1 : state.counters[id] = 0
                    }
                }
            ))
        )
    }
))

export default useStore;