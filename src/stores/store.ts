import {create} from 'zustand';

type Store = {
    cartList: {[id:string]: string},
    isOpen: {[id: string]: boolean},
    counters: {[id: string]: number},
    increment: (id:string) => void,
    decrement: (id:string) => void,
    addToCart: (id:string, price:string) => void,
    removeItem: (id:string) => void
}

const useStore = create<Store>((set) => (
    {
        cartList: {},
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
                        [id]: state.counters[id] <= 1 ?  1 : state.counters[id] - 1
                    }
                }
            ))
        ),
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
        ),
        removeItem: (id) => (
            set((state) =>
                {
                   const newCartList = {...state.cartList};
                   const newCounters = {...state.counters};
                   const newIsOpen = {...state.isOpen};

                    delete newCartList[id];
                    delete newCounters[id];
                    newIsOpen[id] = false;

                    return {
                        cartList: newCartList,
                        counters: newCounters,
                        isOpen: newIsOpen
                    }
                }
            )
        )
    }
))

export default useStore;