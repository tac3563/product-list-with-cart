import "./Cart.scss";
import { motion, AnimatePresence } from "framer-motion";
import useStore from '../../stores/store.ts';
import {parsePrice} from '../../helpers/formatting.ts';
import CartSummary  from  './CartSummary/CartSummary.tsx';
import CartList  from  './CartList/CartList.tsx';
import OrderModal from '../OrderModal/OrderModal.tsx';

export default function Cart() {
    const {cartList, counters, orderStatus, orderConfirmed, clearCart, removeItem} = useStore();
    const cartItems = Object.keys(cartList);

    const cartTotals = cartItems.reduce((total, product) => total + (parsePrice(cartList[product].price) * counters[product]), 0)

    return (
        <aside id="cart" aria-labelledby="cart">
          <h2>
            Your Cart <span>({cartItems.length})</span>
          </h2>

            <CartList key='productCart' cartItems={cartItems} cartList={cartList} counters={counters} removeItem={removeItem} />

            {cartItems.length > 0 &&
                <CartSummary key='productSummary' orderConfirmed={orderConfirmed} buttonText='Confirm Order' cartTotals={cartTotals} />
            }

            <AnimatePresence>
                {orderStatus && (
                    <motion.div
                        key="orderModal"
                        className="order-modal"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <OrderModal>
                            <CartList key='orderCart' orderStatus={orderStatus} cartItems={cartItems}
                                      cartList={cartList} counters={counters}/>
                            <CartSummary key='orderSummary' orderStatus={orderStatus} buttonText='Start New Order'
                                         cartTotals={cartTotals} clearCart={clearCart}/>
                        </OrderModal>
                    </motion.div>
                    )}
            </AnimatePresence>
        </aside>
);
}
