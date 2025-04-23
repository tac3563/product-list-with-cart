import {create} from 'zustand';

type Store = {
    isOpen: {[id: string]: boolean},
    counters: {[id: string]: number},
    increment: (id:string) => void,
    decrement: (id:string) => void,
    cartList: {[id:string]: string},
    addToCart: (id:string, price:string) => void
}

const useStore = create<Store>((set) => (
    {
        isOpen: {},
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
                        [id]: state.counters[id] <= 1 ?  0 : state.counters[id] - 1
                    }
                }
            ))
        ),
        cartList: {},
        addToCart: (id, price) => (
            set((state) => (
                {
                    isOpen: {
                        ...state.isOpen,
                        [id]: !state.isOpen[id]
                    },
                    cartList: {
                        ...state.cartList,
                        [id]: price
                    },
                    counters: {
                        ...state.counters,
                        [id]: state.counters[id] ?? 1
                    }
                }
            ))
        )
    }
))

export default useStore;